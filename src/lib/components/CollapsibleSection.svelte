<script lang="ts">
  import SectionTitle from "$lib/components/SectionTitle.svelte";
  import { cn } from "$lib/shared/utils";
  import { collapsePreferences } from "$lib/stores/preferences";
  import { Collapsible } from "bits-ui";
  import ChevronDown from "lucide-svelte/icons/chevron-down";
  import type { Snippet } from "svelte";
  import { slide } from "svelte/transition";

  let { id, class: className, children, subtitle }: { id: string; class?: string; children?: Snippet; subtitle?: Snippet } = $props();

  let transormedID = $derived(id.replaceAll(" ", "_"));
</script>

<Collapsible.Root asChild let:builder bind:open={() => $collapsePreferences[transormedID.toLowerCase()] ?? true, (v) => ($collapsePreferences[transormedID.toLowerCase()] = v)}>
  <section id={transormedID} use:builder.action {...builder} class={cn("scroll-m-32", className)}>
    <Collapsible.Trigger class="flex items-center justify-between">
      {#if !subtitle}
        <SectionTitle>{id}</SectionTitle>
      {:else}
        {@render subtitle()}
      {/if}
      <ChevronDown class={cn("h-6 w-6 text-text/60 transition-all duration-300", { "rotate-180": $collapsePreferences[transormedID.toLowerCase()] ?? true })} />
    </Collapsible.Trigger>
    <Collapsible.Content transition={slide}>
      {@render children?.()}
    </Collapsible.Content>
  </section>
</Collapsible.Root>
