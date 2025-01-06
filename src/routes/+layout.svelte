<script lang="ts">
  import { page } from "$app/state";
  import Header from "$lib/components/header/Header.svelte";
  import V2Toast from "$lib/components/temp/V2Toast.svelte";
  import { IsHover } from "$lib/hooks/is-hover.svelte";
  import { IsMobile } from "$lib/hooks/is-mobile.svelte";
  import themes from "$lib/shared/constants/themes";
  import { internalPreferences } from "$lib/stores/preferences";
  import { theme as themeStore } from "$lib/stores/themes";
  import { onMount, setContext } from "svelte";
  import type { ToasterProps } from "svelte-sonner";
  import { Toaster, toast } from "svelte-sonner";
  import { writable } from "svelte/store";
  import "../app.css";

  const position = writable<ToasterProps["position"]>("bottom-right");
  const theme = writable<ToasterProps["theme"]>("dark");

  let { children } = $props();
  let isMobile = $state(new IsMobile());
  let isHover = $state(new IsHover());

  setContext("isMobile", isMobile);
  setContext("isHover", isHover);

  themeStore.subscribe((newTheme) => theme.set(themes.find((theme) => theme.id === newTheme)?.light ? "light" : "dark"));

  onMount(async () => {
    if (!$internalPreferences.hasSeenv2Toast) {
      // @ts-expect-error - Not updated for Svelte 5 yet
      toast.custom(V2Toast, {
        duration: Number.POSITIVE_INFINITY,
        onDismiss: () => {
          internalPreferences.update((state) => ({ ...state, hasSeenv2Toast: true }));
        }
      });
    }

    if (window.innerWidth <= 600) {
      position.set("bottom-center");
    }
  });
</script>

<svelte:window
  on:resize={() => {
    if (window.innerWidth <= 600) {
      position.set("bottom-center");
    } else {
      position.set("bottom-right");
    }
  }} />

<svelte:head>
  {#if !page.url.pathname.startsWith("/stats")}
    <link rel="icon" href="/favicon.png" />
  {/if}
</svelte:head>

<Toaster theme={$theme} closeButton={isHover.current} position={$position} class="sm:mr-6" />

<Header />

<div class="pointer-events-none fixed inset-0 z-[-1] h-dvh w-screen bg-cover bg-scroll bg-center bg-no-repeat [background-image:--bg-url]"></div>

{@render children()}
