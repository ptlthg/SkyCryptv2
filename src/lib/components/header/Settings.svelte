<script lang="ts">
  import type { IsHover } from "$lib/hooks/is-hover.svelte";
  import { sections } from "$lib/sections/constants";
  import { packConfigs } from "$lib/shared/constants/packs";
  import type { Theme } from "$lib/shared/constants/themes";
  import themes from "$lib/shared/constants/themes";
  import { flyAndScale } from "$lib/shared/utils";
  import { disabledPacks } from "$lib/stores/packs";
  import { sectionOrderPreferences } from "$lib/stores/preferences";
  import { theme as themeStore } from "$lib/stores/themes";
  import { Avatar, Button, Label, Popover, RadioGroup, Switch, Tabs } from "bits-ui";
  import Check from "lucide-svelte/icons/check";
  import Cog from "lucide-svelte/icons/cog";
  import GripVertical from "lucide-svelte/icons/grip-vertical";
  import ListOrdered from "lucide-svelte/icons/list-ordered";
  import PackageOpen from "lucide-svelte/icons/package-open";
  import PaintBucket from "lucide-svelte/icons/paint-bucket";
  import { getContext, onMount } from "svelte";
  import { dndzone, SHADOW_ITEM_MARKER_PROPERTY_NAME } from "svelte-dnd-action";
  import { flip } from "svelte/animate";
  import { cubicIn } from "svelte/easing";
  import { derived, get } from "svelte/store";
  import { fade } from "svelte/transition";
  import { Drawer } from "vaul-svelte";

  let settingsOpen = $state(false);

  const isHover = getContext<IsHover>("isHover");

  const initialPackConfig = get(disabledPacks);
  const hasPackConfigChanged = derived(disabledPacks, ($disabledPacks) => {
    return JSON.stringify($disabledPacks.sort()) !== JSON.stringify(initialPackConfig.sort());
  });

  const defaultSectionOrder = sections;
  const initialSectionOrderPreferences = get(sectionOrderPreferences);
  const differsFromDefault = derived(sectionOrderPreferences, ($sectionOrderPreferences) => {
    return JSON.stringify($sectionOrderPreferences) !== JSON.stringify(defaultSectionOrder);
  });

  let sectionOrder = $state(initialSectionOrderPreferences);

  function changeTheme(themeId: Theme["id"]) {
    const theme = themes.find((theme) => theme.id === themeId);
    if (!theme) {
      themeStore.set("default");
      document.documentElement.dataset.theme = "default";
      return;
    }
    if (theme.light) {
      document.documentElement.dataset.mode = "light";
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.dataset.mode = "dark";
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }

    document.documentElement.dataset.theme = theme.id;
  }

  onMount(() => {
    changeTheme($themeStore);
  });
</script>

{#snippet settings()}
  <Tabs.Root value="packs">
    <Tabs.List class="mb-4 flex gap-4 rounded-lg bg-text/30 p-2 font-semibold text-text">
      <Tabs.Trigger value="packs" class="flex shrink items-center justify-center gap-1 rounded-lg px-2.5 py-1 text-sm font-semibold data-[state=active]:bg-icon">
        <PackageOpen class="size-5" />
        Packs
      </Tabs.Trigger>
      <Tabs.Trigger value="themes" class="flex shrink items-center justify-center gap-1 rounded-lg px-2.5 py-1 text-sm font-semibold data-[state=active]:bg-icon">
        <PaintBucket class="size-5" />
        Themes
      </Tabs.Trigger>
      <Tabs.Trigger value="order" class="flex shrink items-center justify-center gap-1 rounded-lg px-2.5 py-1 text-sm font-semibold data-[state=active]:bg-icon">
        <ListOrdered class="size-5" />
        Order
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="packs" class="flex flex-col gap-4">
      {#each packConfigs as pack}
        <Label.Root for={pack.id} class="flex items-center justify-between gap-4 rounded-lg bg-text/[0.05] p-2">
          <div class="flex items-center gap-2">
            <Avatar.Root class="shrink-0 select-none">
              <Avatar.Image loading="lazy" src="/resourcepacks/{pack.folder}/pack.png" alt={pack.name} class="pointer-events-none aspect-square size-10 h-full select-none rounded-lg" />
              <Avatar.Fallback class="flex items-center rounded-lg text-center font-semibold uppercase">{pack.name.slice(0, 2)}</Avatar.Fallback>
            </Avatar.Root>
            <div class="flex flex-col">
              <h4 class="font-semibold text-text/90">{pack.name} <small>{pack.version}</small></h4>
              <p class="overflow-hidden text-ellipsis whitespace-nowrap font-normal text-text/60">
                by
                <span class="text-text/80">{pack.author}</span>
              </p>
            </div>
          </div>
          <Switch.Root id={pack.id} checked={!$disabledPacks.includes(pack.id)} class="peer inline-flex h-6 min-h-6 w-10 shrink-0 cursor-pointer items-center rounded-full px-0 transition-colors data-[state=checked]:bg-icon data-[state=unchecked]:bg-text/30" onCheckedChange={() => disabledPacks.update((value) => (!value.includes(pack.id) ? [...new Set([...value, pack.id])] : value.filter((id) => id !== pack.id)))}>
            <Switch.Thumb class="pointer-events-none block size-4 shrink-0 rounded-full bg-text transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-1" />
          </Switch.Root>
        </Label.Root>
      {/each}
      {#if $hasPackConfigChanged}
        <Button.Root
          class="mt-4 w-full rounded-lg bg-text/65 p-1.5 text-sm font-semibold uppercase text-background/80 transition-colors hover:bg-text/80"
          on:click={() => {
            document.cookie = `disabledPacks=${JSON.stringify($disabledPacks)}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
            window.location.reload();
          }}>
          Reload to apply changes
        </Button.Root>
      {/if}
    </Tabs.Content>
    <Tabs.Content value="themes">
      <RadioGroup.Root class="flex flex-col gap-4" bind:value={$themeStore} onValueChange={changeTheme}>
        {#each themes as theme}
          <Label.Root for={theme.id} class="flex items-center justify-between gap-4 rounded-lg bg-text/[0.05] p-2">
            <div class="flex items-center gap-2">
              <Avatar.Root class="shrink-0 select-none">
                <Avatar.Image loading="lazy" src={`/api/themes/${btoa(theme["colors"]!.logo)}${theme.light ? "/true" : ""}/logo.svg`} alt={theme.name} class="pointer-events-none aspect-square size-10 h-full select-none rounded-lg"></Avatar.Image>
                <Avatar.Fallback class="flex items-center rounded-lg text-center font-semibold uppercase">{theme.name.slice(0, 2)}</Avatar.Fallback>
              </Avatar.Root>
              <div class="flex flex-col">
                <h4 class="font-semibold text-text/90">{theme.name}</h4>
                <p class="overflow-hidden text-ellipsis whitespace-nowrap font-normal text-text/60">
                  by
                  <span class="text-text/80">{theme.author}</span>
                </p>
              </div>
            </div>
            <RadioGroup.Item id={theme.id} value={theme.id} class="group inline-flex h-6 min-h-6 w-10 shrink-0 cursor-pointer items-center rounded-full px-0 transition-colors">
              <Check class="size-6 text-icon group-data-[state=unchecked]:invisible" />
            </RadioGroup.Item>
          </Label.Root>
        {/each}
      </RadioGroup.Root>
    </Tabs.Content>
    <Tabs.Content value="order">
      <div
        class="flex max-h-96 flex-col gap-4 overflow-y-auto overflow-x-clip"
        use:dndzone={{ items: sectionOrder, flipDurationMs: 300, dropTargetStyle: {} }}
        onconsider={(e) => (sectionOrder = e.detail.items)}
        onfinalize={(e) => {
          sectionOrderPreferences.set(e.detail.items);
          sectionOrder = e.detail.items;
        }}>
        {#each sectionOrder as section (section.id)}
          {@const normalizedName = section.name.replaceAll("_", " ")}
          <div animate:flip={{ duration: 300 }} class="relative flex items-center gap-2 rounded-lg bg-text/[0.05] p-2 font-semibold">
            <GripVertical class="size-5 text-text/60" />
            {normalizedName}
            {#if SHADOW_ITEM_MARKER_PROPERTY_NAME in section && section[SHADOW_ITEM_MARKER_PROPERTY_NAME]}
              <div in:fade={{ duration: 300, easing: cubicIn }} class="visible absolute inset-0 flex animate-pulse items-center gap-2 rounded-lg bg-text/[0.05] p-2 font-semibold opacity-30">
                <GripVertical class="size-5 text-text/60" />
                {normalizedName}
              </div>
            {/if}
          </div>
        {/each}
      </div>
      {#if $differsFromDefault}
        <Button.Root
          class="mt-4 w-full rounded-lg bg-text/65 p-1.5 text-sm font-semibold uppercase text-background/80 transition-colors hover:bg-text/80"
          on:click={() => {
            sectionOrderPreferences.set(defaultSectionOrder);
          }}>
          Reset to default
        </Button.Root>
      {/if}
    </Tabs.Content>
  </Tabs.Root>
{/snippet}

{#if isHover.current}
  <Popover.Root bind:open={settingsOpen}>
    <Popover.Trigger class="group absolute right-4 top-1/2 flex aspect-square shrink -translate-y-1/2 items-center justify-center gap-1 rounded-full bg-background/20 px-2.5 py-1.5 text-sm font-semibold text-text transition-all duration-100 @md:relative @md:right-0 @md:top-0 @md:my-1.5 @md:translate-y-0">
      <Cog class="size-5 transition-all duration-300 data-[is-open=true]:rotate-45" data-is-open={settingsOpen} />
      <p class="hidden @md:block">Settings</p>
    </Popover.Trigger>
    <Popover.Content transition={flyAndScale} transitionConfig={{ duration: 300, y: -8 }} side="bottom" sideOffset={8} align="center" collisionPadding={8} class="z-10 min-w-[32rem] rounded-lg bg-background-grey/95 px-8 py-4">
      {@render settings()}
    </Popover.Content>
  </Popover.Root>
{:else}
  <Drawer.Root shouldScaleBackground={true} setBackgroundColorOnScale={false} bind:open={settingsOpen}>
    <Drawer.Trigger class="group absolute right-4 top-1/2 flex aspect-square shrink -translate-y-1/2 items-center justify-center gap-1 rounded-full bg-background/20 px-2.5 py-1.5 text-sm font-semibold text-text transition-all duration-100 @md:relative @md:right-0 @md:top-0 @md:my-1.5 @md:translate-y-0">
      <Cog class="size-5 transition-all duration-300 data-[is-open=true]:rotate-45" data-is-open={settingsOpen} />
      <p class="hidden @md:block">Settings</p>
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay class="fixed inset-0 z-40 bg-black/80" />
      <Drawer.Content class="fixed bottom-0 left-0 right-0 z-50 flex max-h-[96%] flex-col rounded-t-[10px] bg-background-lore">
        <div class="mx-auto w-full max-w-md overflow-auto p-6">
          {@render settings()}
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
{/if}
