<script lang="ts">
  import { internalPreferences } from "$lib/stores/preferences";
  import { Button } from "bits-ui";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let showClose = $state(false);

  setTimeout(() => {
    showClose = true;
  }, 5000);
</script>

{#snippet link(href: string, text: string)}
  <Button.Root {href} target="_blank" class="text-link underline">
    {text}
  </Button.Root>
{/snippet}

<div class="w-full select-none space-y-4 text-pretty p-5 font-medium text-text">
  <h3 class="whitespace-nowrap text-2xl font-bold sm:text-3xl">Welcome to <span class="text-link">SkyCrypt v2</span></h3>
  <p>We have written SkyCrypt from the ground up to be faster, more reliable, and more feature-rich than ever before using the latest web technologies</p>
  <p>
    As with any new software, there may be bugs or missing features. If you find any issues, or have any suggestions, please let us know on our {@render link("https://discord.gg/cNgADv2kEQ", "Discord server")}.
  </p>
  <p>
    P.S. Take a look at {@render link("https://minionah.com", "MinionAH")}, it's made by one of the developers that worked on SkyCrypt v2!
  </p>
  <Button.Root
    class="w-full rounded-lg bg-link/80 py-2 text-white opacity-30 transition-opacity duration-1000 disabled:cursor-not-allowed data-[show=true]:opacity-100 dark:text-text"
    disabled={!showClose}
    data-show={showClose}
    on:click={() => {
      dispatch("closeToast");
      internalPreferences.update((state) => ({ ...state, hasSeenv2Toast: true }));
    }}>Close</Button.Root>
</div>
