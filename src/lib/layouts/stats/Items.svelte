<script lang="ts">
  import SectionSubtitle from "$lib/components/SectionSubtitle.svelte";
  import { cn } from "$lib/shared/utils";

  export let subtitle: string | undefined = undefined;

  let className: string | undefined = undefined;
  export { className as class };
</script>

<div class="space-y-4">
  {#if subtitle}
    <SectionSubtitle>{subtitle}</SectionSubtitle>
  {/if}
  <slot name="text" />

  <div class={cn("flex flex-wrap gap-3", className)}>
    <slot />
  </div>

  <slot name="info" />
</div>
