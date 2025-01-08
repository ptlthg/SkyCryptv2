<script lang="ts">
  import Item from "$lib/components/Item.svelte";
  import type { ProcessedSkyBlockItem } from "$types/stats";
  import { Avatar } from "bits-ui";

  let { wardrobeItems }: { wardrobeItems: ProcessedSkyBlockItem[] } = $props();

  const pieces = ["helmet", "chestplate", "leggings", "boots"];
</script>

<div class="mt-2 flex flex-col gap-2">
  {#each wardrobeItems as piece, index}
    {#if piece && piece.display_name}
      <Item {piece} />
    {:else}
      <Avatar.Root class="rounded-lg bg-background-lore p-2">
        <Avatar.Image loading="lazy" class="size-14" src={`/img/textures/item/empty_armor_slot_${pieces[index]}.png`} />
      </Avatar.Root>
    {/if}
  {/each}
</div>
