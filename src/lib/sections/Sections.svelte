<script lang="ts">
  import { getProfileCtx } from "$ctx/profile.svelte";
  import type { SectionName } from "$lib/sections/types";
  import { sectionOrderPreferences } from "$lib/stores/preferences";
  import type { ValidStats } from "$types/global";

  import type { Component } from "svelte";
  import { onMount } from "svelte";

  const ctx = getProfileCtx();
  const profile = $derived(ctx.profile);

  function findIndex(id: SectionName) {
    return $sectionOrderPreferences.findIndex((section) => section.name === id);
  }

  const COMPONENTS = {
    Armor: {
      component: () => import("./stats/Armor.svelte"),
      valid: (profile: ValidStats) => profile.items?.armor && profile.items?.equipment && profile.items?.wardrobe,
      preload: true,
      priority: 1
    },
    Weapons: {
      component: () => import("$lib/sections/stats/Weapons.svelte"),
      valid: (profile: ValidStats) => profile.items?.weapons,
      priority: 2
    },
    Accessories: {
      component: () => import("$lib/sections/stats/Accessories.svelte"),
      valid: (profile: ValidStats) => profile.accessories,
      priority: 3
    },
    Pets: {
      component: () => import("$lib/sections/stats/Pets.svelte"),
      valid: (profile: ValidStats) => profile.pets,
      priority: 4
    },
    Inventory: {
      component: () => import("$lib/sections/stats/Inventory.svelte"),
      valid: (profile: ValidStats) => profile.items,
      priority: 5
    },
    Skills: {
      component: () => import("$lib/sections/stats/SkillsSection.svelte"),
      valid: (profile: ValidStats) => profile.skills,
      priority: 6
    },
    Dungeons: {
      component: () => import("$lib/sections/stats/Dungeons.svelte"),
      valid: (profile: ValidStats) => profile.dungeons,
      priority: 7
    },
    Slayer: {
      component: () => import("$lib/sections/stats/Slayer.svelte"),
      valid: (profile: ValidStats) => profile.slayer,
      priority: 8
    },
    Minions: {
      component: () => import("$lib/sections/stats/Minions.svelte"),
      valid: (profile: ValidStats) => profile.minions,
      priority: 9
    },
    Bestiary: {
      component: () => import("$lib/sections/stats/Bestiary.svelte"),
      valid: (profile: ValidStats) => profile.bestiary,
      priority: 10
    },
    Collections: {
      component: () => import("$lib/sections/stats/Collections.svelte"),
      valid: (profile: ValidStats) => profile.collections,
      priority: 11
    },
    CrimsonIsle: {
      component: () => import("$lib/sections/stats/CrimsonIsle.svelte"),
      valid: (profile: ValidStats) => profile.crimson_isle,
      priority: 12
    },
    Rift: {
      component: () => import("$lib/sections/stats/Rift.svelte"),
      valid: (profile: ValidStats) => profile.rift,
      priority: 13
    },
    Misc: {
      component: () => import("$lib/sections/stats/MiscSection.svelte"),
      valid: (profile: ValidStats) => profile.misc,
      priority: 14
    }
  } as const;

  let renderedComponents = $state(new Map<string, Component>());
  let loadingStates = $state(new Map<string, Promise<Component>>());
  let preloadComplete = $state(false);
  let mounted = $state(false);

  async function loadComponent(name: string) {
    if (renderedComponents.has(name)) {
      return renderedComponents.get(name);
    }

    if (!loadingStates.has(name)) {
      const loadPromise = COMPONENTS[name as keyof typeof COMPONENTS].component().then((module) => {
        renderedComponents = new Map(renderedComponents).set(name, module.default as Component);
        loadingStates = new Map(loadingStates);
        loadingStates.delete(name);
        return module.default;
      });

      loadingStates = new Map(loadingStates).set(name, loadPromise as unknown as Promise<Component>);
      return loadPromise;
    }

    return loadingStates.get(name);
  }

  function setupObserver(elem: HTMLElement) {
    let observer: IntersectionObserver;

    function createObserver() {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const sectionId = entry.target.getAttribute("data-section");
            if (sectionId && entry.isIntersecting) {
              loadComponent(sectionId);
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "200px 0px", threshold: 0 }
      );

      const rect = elem.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        const sectionId = elem.getAttribute("data-section");
        if (sectionId) {
          loadComponent(sectionId);
        }
      } else {
        observer.observe(elem);
      }
    }

    if (mounted) {
      createObserver();
    }

    return {
      destroy: () => observer?.disconnect()
    };
  }

  async function loadRemainingComponents() {
    const remainingComponents = Object.entries(COMPONENTS)
      .filter(([, config]) => !(config as { preload?: boolean }).preload)
      .map(([name]) => loadComponent(name));

    await Promise.all(remainingComponents);
  }

  onMount(() => {
    mounted = true;

    Promise.all(
      Object.entries(COMPONENTS)
        .filter(([, config]) => (config as { preload?: boolean }).preload)
        .map(([name]) => loadComponent(name))
    ).then(() => {
      preloadComplete = true;
      loadRemainingComponents();
    });
  });
</script>

<div class="space-y-4">
  {#if preloadComplete}
    {#each Object.entries(COMPONENTS).sort(([, a], [, b]) => (a.priority ?? 99) - (b.priority ?? 99)) as [section, { valid }]}
      {#if valid(profile)}
        <div data-section={section} use:setupObserver>
          {#if renderedComponents.has(section)}
            {#key section}
              {#if renderedComponents.has(section)}
                {@const Component = renderedComponents.get(section)}
                {#if Component}
                  <Component order={findIndex(section as SectionName)} />
                {/if}
              {/if}
            {/key}
          {:else if loadingStates.has(section)}
            <div class="rounded-lg bg-gray-800/50 p-6 shadow-lg backdrop-blur">
              <div class="flex items-center space-x-3">
                <div class="h-4 w-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
                <span>Loading {section}...</span>
              </div>
            </div>
          {:else}
            <div class="rounded-lg bg-gray-800/50 p-6 opacity-50 shadow-lg backdrop-blur">
              <div class="text-sm text-gray-400">
                {section} will load when visible
              </div>
            </div>
          {/if}
        </div>
      {/if}
    {/each}
  {/if}
</div>
