<script lang="ts">
  import { replaceState } from "$app/navigation";
  import { page } from "$app/state";
  import { getProfileCtx } from "$ctx/profile.svelte";
  import { sections } from "$lib/sections/constants";
  import type { SectionName } from "$lib/sections/types";
  import { sectionOrderPreferences } from "$lib/stores/preferences";
  import { Button, ScrollArea } from "bits-ui";
  import { onDestroy } from "svelte";

  const intersectingElements = new Map();

  const ctx = getProfileCtx();
  const profile = $derived(ctx.profile);

  let { componentsLoaded }: { componentsLoaded: boolean } = $props();
  let activeSection: SectionName = $state(sections[0].name);
  let pinned = $state(false);
  let sectionObserver: IntersectionObserver;
  let observer: IntersectionObserver;

  function scrollToTab(smooth = true, element?: HTMLElement) {
    const link = element ?? document.querySelector<HTMLAnchorElement>(`[href="${location.hash}"]`);
    const scrollableParent = link?.parentElement?.parentElement as HTMLElement;

    if (link == null) {
      console.warn(`could not scroll to ${location.hash} tab because it does not exist`, link);
      return;
    }

    const behavior = smooth ? "smooth" : "auto";
    const left = link.offsetLeft + link.getBoundingClientRect().width / 2 - scrollableParent.getBoundingClientRect().width / 2;
    scrollableParent.scrollTo({ left, behavior });
  }

  function observerInit() {
    const navBarLinks = document.querySelector(".navbar [data-scroll-area-viewport]")?.querySelectorAll<HTMLAnchorElement>("a") ?? [];
    sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          intersectingElements.set(entry.target, entry.isIntersecting);
        }
        for (const [element, isIntersecting] of intersectingElements) {
          if (isIntersecting) {
            let newHash;
            newHash = "#" + element.id;
            replaceState(newHash, page.state);
            for (const link of navBarLinks) {
              if (link.hash === newHash) {
                activeSection = link.hash.slice(1) as SectionName;
                scrollToTab(true, link);
              }
            }
            break;
          }
        }
      },
      { rootMargin: "-12% 0px -25% 0px" }
    );

    const navbar = document.querySelector(".navbar") as HTMLElement;
    observer = new IntersectionObserver(([e]) => (pinned = e.intersectionRatio < 1), {
      threshold: [1],
      rootMargin: `-${parseInt(window.getComputedStyle(navbar).getPropertyValue("top")) + 1}px 0px` // shrink the viewport to element top value +1px to trigger observer when element has reach it's sticky position
    });

    observer.observe(navbar);
    for (const section of document.querySelectorAll("section[id]")) {
      sectionObserver.observe(section);
    }
  }

  function observerCleanup() {
    sectionObserver.disconnect();
    observer.disconnect();
    intersectingElements.clear();
  }

  onDestroy(() => {
    observerCleanup();
  });

  $effect(() => {
    if (profile && componentsLoaded) {
      console.log("Navbar effect");
      if (sectionObserver && observer) observerCleanup();
      observerInit();
    }
  });
</script>

<ScrollArea.Root type="scroll" class="navbar group sticky top-[calc(3rem+env(safe-area-inset-top,0))] z-20" data-pinned={pinned}>
  <ScrollArea.Viewport>
    <ScrollArea.Content class="!flex flex-nowrap items-center justify-center gap-2 whitespace-nowrap pb-2 font-semibold text-text/80">
      <div class="absolute bottom-[0.4375rem] z-[1] h-[2px] w-[calc(100%+0.5rem)] bg-icon"></div>
      <div class="group-data-[mode=light]/html:group-data-[pinned=true]:bg-[#f0f0f0]/92 absolute inset-0 bottom-2 group-data-[mode=dark]/html:group-data-[pinned=true]:bg-[#141414]/90"></div>
      {#each $sectionOrderPreferences as section}
        <Button.Root href="#{section.name}" class="relative px-2 py-3 after:absolute after:left-0 after:top-full after:h-0 after:w-full after:origin-top after:rounded-full after:bg-icon after:transition-all after:duration-100 hover:after:top-[calc(100%-4px)] hover:after:h-2 data-[active=true]:text-text data-[active=true]:after:top-[calc(100%-4px)] data-[active=true]:after:h-2" data-active={section.name === activeSection}>
          {section.name?.replaceAll("_", " ")}
        </Button.Root>
      {/each}
    </ScrollArea.Content>
  </ScrollArea.Viewport>
  <ScrollArea.Scrollbar orientation="horizontal">
    <ScrollArea.Thumb />
  </ScrollArea.Scrollbar>
</ScrollArea.Root>
