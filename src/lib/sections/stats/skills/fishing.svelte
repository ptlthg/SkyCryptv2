<script lang="ts">
  import { getProfileCtx } from "$ctx/profile.svelte";
  import AdditionStat from "$lib/components/AdditionStat.svelte";
  import Chip from "$lib/components/Chip.svelte";
  import Item from "$lib/components/Item.svelte";
  import SectionSubtitle from "$lib/components/SectionSubtitle.svelte";
  import Items from "$lib/layouts/stats/Items.svelte";
  import { renderLore, titleCase } from "$lib/shared/helper";
  import { Avatar, Collapsible } from "bits-ui";
  import ChevronDown from "lucide-svelte/icons/chevron-down";
  import Image from "lucide-svelte/icons/image";
  import { format } from "numerable";
  import { fade } from "svelte/transition";

  const ctx = getProfileCtx();
  const profile = $derived(ctx.profile);

  const highestPriorityFishingTool = $derived(profile.items.fishing_tools.highest_priority_tool);
  const fishingTools = $derived(profile.items.fishing_tools.tools);
</script>

<SectionSubtitle>Fishing</SectionSubtitle>
<div class="space-y-0.5">
  <AdditionStat text="Items Fished" data={format(profile.fishing.itemsFished)} />
  <AdditionStat text="Treasures Fished" data={format(profile.fishing.treasure)} />
  <AdditionStat text="Large Treasures Fished" data={format(profile.fishing.treasureLarge)} />
  <AdditionStat text="Sea Creatures Killed" data={format(profile.fishing.seaCreaturesFished)} />
  {#if profile.fishing.trophyFish}
    <AdditionStat text="Trophy Fish Fished" data={format(profile.fishing.trophyFish.totalCaught)} />
  {/if}
</div>

<SectionSubtitle>Fishing Rods</SectionSubtitle>
{#if fishingTools.length > 0}
  <Items>
    {#snippet text()}
      <div class="space-y-2">
        {#if highestPriorityFishingTool && highestPriorityFishingTool.display_name}
          <p class="space-x-0.5 font-bold capitalize leading-6 text-text/60">
            <span>Active Rod:</span>
            {@html renderLore(highestPriorityFishingTool.display_name)}
          </p>
        {/if}
      </div>
    {/snippet}
    {#each fishingTools as tool}
      <Item piece={tool} />
    {/each}
  </Items>
{:else}
  <p class="space-x-0.5 leading-6">{profile.username} doesn't have any fishing tools.</p>
{/if}

{#if Object.entries(profile.fishing.kills).find(([_, seaCreature]) => seaCreature.amount > 0)}
  <Collapsible.Root>
    <Collapsible.Trigger class="group flex items-center gap-0.5 pt-4">
      <ChevronDown class="size-5 transition-all duration-300 group-data-[state=open]:-rotate-180" />
      <SectionSubtitle class="my-0">Sea Creatures</SectionSubtitle>
    </Collapsible.Trigger>
    <Collapsible.Content class="mt-4 flex flex-wrap gap-4">
      {@const seaCreatures = Object.entries(profile.fishing.kills)}
      {#each seaCreatures as [_, seaCreature], index}
        <div class="flex size-full max-h-56 max-w-36 flex-col rounded-lg bg-background/30 p-2" in:fade|global={{ duration: 300, delay: 25 * (index + 1) }} out:fade|global={{ duration: 300, delay: 5 * (seaCreatures.length - index) }}>
          <div class="flex h-12 items-center justify-center border-b-2 border-icon pb-2 text-center font-bold">
            {seaCreature.name}
          </div>
          <div class="mt-2 flex h-full flex-col items-center justify-center gap-4">
            <Avatar.Root class="flex items-center justify-center">
              <Avatar.Image loading="lazy" src={seaCreature.texture} class="aspect-square size-24 object-contain" />
              <Avatar.Fallback>
                <Image class="size-24" />
              </Avatar.Fallback>
            </Avatar.Root>
            <div class="text-center font-bold">
              {seaCreature.amount} <span class="text-text/60">Kills</span>
            </div>
          </div>
        </div>
      {/each}
    </Collapsible.Content>
  </Collapsible.Root>
{/if}

{#if profile.fishing.trophyFish != null && profile.fishing.trophyFish.totalCaught > 0}
  <Collapsible.Root>
    <Collapsible.Trigger class="group flex items-center gap-0.5 pt-4">
      <ChevronDown class="size-5 transition-all duration-300 group-data-[state=open]:-rotate-180" />
      <SectionSubtitle class="my-0">Trophy Fish</SectionSubtitle>
    </Collapsible.Trigger>
    <Collapsible.Content class="mt-4 space-y-4">
      <div class="space-y-0.5">
        {#if profile.fishing.trophyFish}
          <AdditionStat text="Total Caught" data={format(profile.fishing.trophyFish.totalCaught)} />
          <AdditionStat text="Current Stage" data={profile.fishing.trophyFish.stage.name} asterisk={true}>
            <div class="mb-4">
              {#each profile.fishing.trophyFish.stage.progress as tier}
                <AdditionStat text={titleCase(tier.tier)} data={`${tier.caught} / ${tier.total}`} />
              {/each}
            </div>
          </AdditionStat>
        {/if}
      </div>

      {#if profile.fishing.trophyFish}
        {@const trophyFishes = Object.entries(profile.fishing.trophyFish.trophyFish)}
        <div class="flex flex-wrap gap-4">
          {#each trophyFishes as [_, trophyFish], index}
            <Chip class="px-4" animationOptions={{ animate: true, amountOfItems: trophyFishes.length, index: index }} image={{ src: trophyFish.texture }} variant="tooltip">
              <div class="flex flex-col">
                <div class="flex flex-col gap-0.5">
                  <h4 class="font-bold text-text/60">{trophyFish.name} <span class="font-medium text-text/70">x{format(trophyFish.bronze + trophyFish.silver + trophyFish.gold + trophyFish.diamond)}</span></h4>
                </div>
                <div class="grid grid-cols-2 grid-rows-2">
                  <div class="flex items-center gap-1">
                    <div class="size-4 rounded-full bg-[#a85c03]"></div>
                    {format(trophyFish.bronze)}
                  </div>
                  <div class="flex items-center gap-1">
                    <div class="size-4 rounded-full bg-[#b4b4b5]"></div>
                    {format(trophyFish.silver)}
                  </div>
                  <div class="flex items-center gap-1">
                    <div class="size-4 rounded-full bg-[#feb801]"></div>
                    {format(trophyFish.gold)}
                  </div>
                  <div class="flex items-center gap-1">
                    <div class="size-4 rounded-full bg-[#68ecff]"></div>
                    {format(trophyFish.diamond)}
                  </div>
                </div>
              </div>
              <svelte:fragment slot="tooltip">
                {@html renderLore(trophyFish.description)}
              </svelte:fragment>
            </Chip>
          {/each}
        </div>
      {/if}
    </Collapsible.Content>
  </Collapsible.Root>
{/if}
