<script lang="ts">
  import { getProfileCtx } from "$ctx/profile.svelte";
  import { cn } from "$lib/shared/utils";
  import * as skinview3d from "skinview3d";
  import { onMount } from "svelte";

  const ctx = getProfileCtx();
  const profile = $derived(ctx.profile);

  let { class: className }: { class: string | undefined } = $props();
  let viewer: skinview3d.SkinViewer;
  let minecraftAvatar: HTMLCanvasElement;
  let canvasIsLoading = $state<boolean>(true);

  const FIXED_WIDTH = 500;
  const FIXED_HEIGHT = 1000;

  function updateViewerSize() {
    if (viewer) {
      const supersamplingFactor = 4;
      const pixelRatio = (window.devicePixelRatio || 1) * supersamplingFactor;

      viewer.setSize(FIXED_WIDTH * pixelRatio, FIXED_HEIGHT * pixelRatio);
      viewer.canvas.style.width = FIXED_WIDTH + "px";
      viewer.canvas.style.height = FIXED_HEIGHT + "px";
    }
  }

  onMount(() => {
    const createSkinviewer = async () => {
      const cape = await fetch(`https://crafatar.com/capes/${profile.uuid}`, {
        method: "HEAD"
      }).catch(() => ({ ok: false }));

      viewer = new skinview3d.SkinViewer({
        canvas: minecraftAvatar,
        width: FIXED_WIDTH,
        height: FIXED_HEIGHT,
        skin: `https://crafatar.com/skins/${profile.uuid}`,
        cape: cape.ok ? `https://crafatar.com/capes/${profile.uuid}` : undefined,
        animation: new skinview3d.IdleAnimation(),
        preserveDrawingBuffer: true
      });

      viewer.camera.position.set(-18, -3, 78);
      viewer.controls.enableZoom = false;
      viewer.controls.enablePan = true;
      viewer.controls.enableRotate = true;
      viewer.canvas.removeAttribute("tabindex");

      const resizeObserver = new ResizeObserver(() => {
        updateViewerSize();
      });
      resizeObserver.observe(minecraftAvatar);

      canvasIsLoading = false;
    };

    createSkinviewer();

    return () => {
      canvasIsLoading = true;
      viewer.dispose();
    };
  });
</script>

<div class="relative h-[400px] w-[300px]">
  <canvas bind:this={minecraftAvatar} class={cn("absolute inset-0 h-full w-full transform-gpu overflow-hidden transition-opacity duration-[3s] [image-rendering:pixelated]", className)} class:opacity-100={!canvasIsLoading} class:opacity-0={canvasIsLoading}></canvas>
</div>
