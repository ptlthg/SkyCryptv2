<script lang="ts">
  import { getProfileCtx } from "$ctx/profile.svelte";
  import AdditionStat from "$lib/components/AdditionStat.svelte";
  import Chip from "$lib/components/Chip.svelte";
  import CollapsibleSection from "$lib/components/CollapsibleSection.svelte";
  import Items from "$lib/layouts/stats/Items.svelte";
  import { cn } from "$lib/shared/utils";
  import { format } from "numerable";

  let { order }: { order: number } = $props();

  const ctx = getProfileCtx();
  const profile = $derived(ctx.profile);

  const collections = $derived(profile.collections);
</script>

<CollapsibleSection id="Collections" {order}>
  <Items class="flex-col">
    {#snippet text()}
      <div>
        <AdditionStat text="Maxed Collections" data="{collections.maxedCollections} / {collections.totalCollections}" maxed={collections.maxedCollections === collections.totalCollections} />
      </div>
    {/snippet}
    {#each Object.entries(collections.categories) as [_, data]}
      <div class="flex items-center gap-1 text-base font-semibold uppercase">
        <h3 class="text-xl">{data.name}</h3>
        {#if data.maxTiers === data.totalTiers}
          <span class="text-gold">Max!</span>
        {:else}
          <span class="text-text/80">({data.maxTiers} / {data.totalTiers} max)</span>
        {/if}
      </div>

      <div class="flex flex-wrap gap-4">
        {#each data.items as item}
          {@const hasUnlocked = item.totalAmount}
          {@const hasMaxed = item.tier === item.maxTier}
          <Chip image={{ src: item.texture }} class={cn("h-fit w-fit", { "opacity-50": !hasUnlocked })} variant="tooltip">
            <div class={cn("flex flex-col")}>
              <div class="font-bold">
                <span class={cn(hasMaxed ? "text-maxed" : "opacity-60")}>{item.name}</span>
                <span class={cn({ "text-gold": hasMaxed })}>{item.tier}</span>
                <div class="text-sm">
                  <span class="opacity-60">Amount:</span>
                  <span class="text-text">{format(item.amount)}</span>
                </div>
              </div>
            </div>
            <div slot="tooltip" class="text-sm font-bold">
              {#if item.amounts.length > 0}
                <div class="mb-4">
                  {#each item.amounts as user}
                    <div>
                      <span class="opacity-85">
                        {user.username}:
                      </span>
                      <span class="text-text">{format(user.amount)}</span>
                    </div>
                  {/each}
                </div>
              {/if}
              <div>
                <span class="opacity-85"> Total: </span>
                <span class="text-text opacity-100">{format(item.totalAmount)}</span>
              </div>
            </div>
          </Chip>
        {/each}
      </div>
    {/each}
  </Items>
</CollapsibleSection>
