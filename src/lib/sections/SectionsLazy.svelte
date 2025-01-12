<script lang="ts">
  import { getProfileCtx } from "$ctx/profile.svelte";
  import type { SectionComponents, SectionName } from "$lib/sections/types";
  import { sectionOrderPreferences } from "$lib/stores/preferences";

  const ctx = getProfileCtx();
  const profile = $derived(ctx.profile);

  const sectionComponents: SectionComponents = $derived({
    Armor: profile.items && profile.items.armor && profile.items.equipment && profile.items.wardrobe ? import("$lib/sections/stats/Armor.svelte") : null,
    Weapons: profile.items && profile.items.weapons ? import("$lib/sections/stats/Weapons.svelte") : null,
    Accessories: profile.accessories ? import("$lib/sections/stats/Accessories.svelte") : null,
    Pets: profile.pets ? import("$lib/sections/stats/Pets.svelte") : null,
    Inventory: profile.items ? import("$lib/sections/stats/Inventory.svelte") : null,
    Skills: profile.skills ? import("$lib/sections/stats/SkillsSection.svelte") : null,
    Dungeons: profile.dungeons ? import("$lib/sections/stats/Dungeons.svelte") : null,
    Slayer: profile.slayer ? import("$lib/sections/stats/Slayer.svelte") : null,
    Minions: profile.minions ? import("$lib/sections/stats/Minions.svelte") : null,
    Bestiary: profile.bestiary ? import("$lib/sections/stats/Bestiary.svelte") : null,
    Collections: profile.collections ? import("$lib/sections/stats/Collections.svelte") : null,
    Crimson_Isle: profile.crimson_isle ? import("$lib/sections/stats/CrimsonIsle.svelte") : null,
    Rift: profile.rift ? import("$lib/sections/stats/Rift.svelte") : null,
    Misc: profile.misc ? import("$lib/sections/stats/MiscSection.svelte") : null
  });

  $effect(() => {
    Promise.allSettled(Object.values(sectionComponents)).then(() => {
      // scroll to the hash if it exists
      if (location.hash) {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
</script>

{#each $sectionOrderPreferences as sectionId (sectionId.id)}
  {@const section = sectionComponents[sectionId.name as SectionName]}
  {#if section}
    {#await section then { default: Component }}
      <Component />
    {/await}
  {:else}
    <p>Something went wrong</p>
  {/if}
{/each}
