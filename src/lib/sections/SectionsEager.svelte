<script lang="ts">
  import { getProfileCtx } from "$ctx/profile.svelte";
  import Accessories from "$lib/sections/stats/Accessories.svelte";
  import Bestiary from "$lib/sections/stats/Bestiary.svelte";
  import Collections from "$lib/sections/stats/Collections.svelte";
  import Crimson_Isle from "$lib/sections/stats/CrimsonIsle.svelte";
  import Dungeons from "$lib/sections/stats/Dungeons.svelte";
  import Inventory from "$lib/sections/stats/Inventory.svelte";
  import Minions from "$lib/sections/stats/Minions.svelte";
  import Misc from "$lib/sections/stats/MiscSection.svelte";
  import Pets from "$lib/sections/stats/Pets.svelte";
  import Rift from "$lib/sections/stats/Rift.svelte";
  import Skills from "$lib/sections/stats/SkillsSection.svelte";
  import Slayer from "$lib/sections/stats/Slayer.svelte";
  import Weapons from "$lib/sections/stats/Weapons.svelte";
  import type { SectionComponentsEager, SectionName } from "$lib/sections/types";
  import { sectionOrderPreferences } from "$lib/stores/preferences";
  import Armor from "./stats/Armor.svelte";

  const ctx = getProfileCtx();
  const profile = $derived(ctx.profile);

  const sectionComponents: SectionComponentsEager = $derived({
    Armor: profile.items && profile.items.armor && profile.items.equipment && profile.items.wardrobe ? Armor : null,
    Weapons: profile.items && profile.items.weapons ? Weapons : null,
    Accessories: profile.accessories ? Accessories : null,
    Pets: profile.pets ? Pets : null,
    Inventory: profile.items ? Inventory : null,
    Skills: profile.skills ? Skills : null,
    Dungeons: profile.dungeons ? Dungeons : null,
    Slayer: profile.slayer ? Slayer : null,
    Minions: profile.minions ? Minions : null,
    Bestiary: profile.bestiary ? Bestiary : null,
    Collections: profile.collections ? Collections : null,
    Crimson_Isle: profile.crimson_isle ? Crimson_Isle : null,
    Rift: profile.rift ? Rift : null,
    Misc: profile.misc ? Misc : null
  });
</script>

{#each $sectionOrderPreferences as sectionId (sectionId.id)}
  {@const Component = sectionComponents[sectionId.name as SectionName]}
  {#if Component !== null}
    <Component />
  {:else}
    <p>Something went wrong</p>
  {/if}
{/each}
