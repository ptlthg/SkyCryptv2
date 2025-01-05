<script lang="ts">
  import { getProfileCtx } from "$ctx/profile.svelte";
  import type { IsHover } from "$lib/hooks/is-hover.svelte";
  import { flyAndScale } from "$lib/shared/utils";
  import { Dialog } from "bits-ui";
  import { getContext } from "svelte";
  import { fade } from "svelte/transition";
  import { Drawer } from "vaul-svelte";

  const { profile } = getProfileCtx();
  const apiSettings = Object.entries(profile.apiSettings).filter(([_, value]) => !value);
  const isHover = getContext<IsHover>("isHover");
</script>

{#if apiSettings.length}
  <div class="mx-auto w-full max-w-lg overflow-clip rounded-lg bg-background/30">
    <div class="bg-icon py-1 text-center text-xl font-semibold uppercase">Notice</div>
    <div class="text-pretty p-5 text-center font-medium">
      <p>
        {#each apiSettings as [key, _], index}
          {#if index === apiSettings.length - 1 && index > 0}
            &nbsp;and
          {/if}
          <span class="inline-block whitespace-nowrap capitalize">{key.replaceAll("_", " ")}</span>{#if index < apiSettings.length - 1},{/if}
        {/each}
        are not available for {profile.username} due to limited API access.
      </p>
      <p>
        {#if isHover.current}
          {@render modal()}
        {:else}
          {@render drawer()}
        {/if}
        how to enable full API access.
      </p>
    </div>
  </div>
{/if}

{#snippet video()}
  <video preload="metadata" muted loop disablepictureinpicture disableremoteplayback controlslist="nodownload noremoteplayback noplaybackrate" controls autoplay playsinline class="data-[is-hover=true]:rounded-lg data-[is-hover=false]:rounded-t-lg" data-is-hover={isHover.current}>
    <source type="video/webm" src="/video/enable-api.webm" />
    <source type="video/mp4" src="/video/enable-api.mp4" />
  </video>
{/snippet}

{#snippet modal()}
  <Dialog.Root>
    <Dialog.Trigger class="text-link underline">See here</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay transition={fade} transitionConfig={{ duration: 150 }} class="fixed inset-0 z-40 bg-black/80" />
      <Dialog.Content transition={flyAndScale} class="fixed left-[50%] top-[50%] z-50 w-full -translate-x-1/2 -translate-y-1/2 p-5">
        {@render video()}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
{/snippet}

{#snippet drawer()}
  <Drawer.Root shouldScaleBackground={true} setBackgroundColorOnScale={false}>
    <Drawer.Trigger class="text-link underline">See here</Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay class="fixed inset-0 z-40 bg-black/80" />
      <Drawer.Content class="fixed bottom-0 left-0 right-0 z-50 max-h-[96%]">
        {@render video()}
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
{/snippet}
