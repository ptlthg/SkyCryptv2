<script lang="ts">
  import SectionTitle from "$lib/components/SectionTitle.svelte";
  import { cn } from "$lib/shared/utils";
  import { inviewportSections } from "$lib/stores/internal";
  import { collapsePreferences } from "$lib/stores/preferences";
  import { Collapsible } from "bits-ui";
  import ChevronDown from "lucide-svelte/icons/chevron-down";
  import { IsInViewport } from "runed";
  import type { Snippet } from "svelte";
  import { slide } from "svelte/transition";

  type Props = {
    id: string;
    class?: string;
    order?: number;
    children?: Snippet;
    subtitle?: Snippet;
  };

  let { id, class: className, order, children, subtitle }: Props = $props();
  let sectionElement = $state<HTMLElement>();

  let transormedID = $derived.by(() => {
    if (id === "Miscellaneous") {
      return "Misc";
    }
    return id.replaceAll(" ", "_");
  });
  const inViewport = new IsInViewport(() => sectionElement);

  $effect(() => {
    inviewportSections.update((sections) => {
      return {
        ...sections,
        [transormedID]: inViewport.current
      };
    });
  });
</script>

<Collapsible.Root asChild let:builder bind:open={() => $collapsePreferences[transormedID.toLowerCase()] ?? true, (v) => ($collapsePreferences[transormedID.toLowerCase()] = v)}>
  <section id={transormedID} class={cn("order-[--order] scroll-m-32", className)} style="--order: {order};" bind:this={sectionElement} use:builder.action {...builder}>
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
