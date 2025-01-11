<script lang="ts">
  import { getProfileCtx } from "$ctx/profile.svelte";
  import type { SectionComponents, SectionName } from "$lib/sections/types";
  import { sectionOrderPreferences } from "$lib/stores/preferences";

  const ctx = getProfileCtx();
  const profile = $derived(ctx.profile);

  const sectionComponents: SectionComponents = {
    Armor: {
      component: () => import("$lib/sections/stats/Armor.svelte"),
      condition: () => !!(profile.items && profile.items.armor && profile.items.equipment && profile.items.wardrobe)
    },
    Weapons: {
      component: () => import("$lib/sections/stats/Weapons.svelte"),
      condition: () => !!(profile.items && profile.items.weapons)
    },
    Accessories: {
      component: () => import("$lib/sections/stats/Accessories.svelte"),
      condition: () => !!profile.accessories
    },
    Pets: {
      component: () => import("$lib/sections/stats/Pets.svelte"),
      condition: () => !!profile.pets
    },
    Inventory: {
      component: () => import("$lib/sections/stats/Inventory.svelte"),
      condition: () => !!profile.items
    },
    Skills: {
      component: () => import("$lib/sections/stats/SkillsSection.svelte"),
      condition: () => !!profile.skills
    },
    Dungeons: {
      component: () => import("$lib/sections/stats/Dungeons.svelte"),
      condition: () => !!profile.dungeons
    },
    Slayer: {
      component: () => import("$lib/sections/stats/Slayer.svelte"),
      condition: () => !!profile.slayer
    },
    Minions: {
      component: () => import("$lib/sections/stats/Minions.svelte"),
      condition: () => !!profile.minions
    },
    Bestiary: {
      component: () => import("$lib/sections/stats/Bestiary.svelte"),
      condition: () => !!profile.bestiary
    },
    Collections: {
      component: () => import("$lib/sections/stats/Collections.svelte"),
      condition: () => !!profile.collections
    },
    Crimson_Isle: {
      component: () => import("$lib/sections/stats/CrimsonIsle.svelte"),
      condition: () => !!profile.crimson_isle
    },
    Rift: {
      component: () => import("$lib/sections/stats/Rift.svelte"),
      condition: () => !!profile.rift
    },
    Misc: {
      component: () => import("$lib/sections/stats/MiscSection.svelte"),
      condition: () => !!profile.misc
    }
  };
</script>

{#each $sectionOrderPreferences as sectionId}
  {#if sectionComponents[sectionId.name as SectionName]}
    {@const section = sectionComponents[sectionId.name as SectionName]}
    {#if section.condition()}
      {#await section.component() then { default: Component }}
        <Component />
      {/await}
    {:else}
      <p>Something went wrong</p>
    {/if}
  {/if}
{/each}
