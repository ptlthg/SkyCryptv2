<script lang="ts">
  import { replaceState } from "$app/navigation";
  import { page } from "$app/state";
  import { setProfileCtx } from "$ctx/profile.svelte";
  import Main from "$lib/layouts/stats/Main.svelte";
  import type { ValidStats } from "$types/stats";
  import { tick, untrack } from "svelte";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();

  // Initialize the profile context
  setProfileCtx(data.user as unknown as ValidStats);

  // Update the profile context when the data changes
  $effect(() => {
    const abortController = new AbortController();
    setProfileCtx(data.user as unknown as ValidStats);

    untrack(() => {
      if (!data.user) return;

      const { username, profile_cute_name } = data.user;
      if (!username) return;

      const current = page.url.pathname;
      const wanted = `/stats/${username}/${profile_cute_name || ""}`;

      // Update the URL to match the username and cute name
      if (current !== wanted) {
        const newUrl = page.url.toString().replace(current, wanted);

        // Only proceed if not aborted
        if (!abortController.signal.aborted) {
          tick()
            .then(() => {
              if (!abortController.signal.aborted) {
                replaceState(newUrl, page.state);
              }
            })
            .catch(() => {});
        }
      }
    });

    return () => {
      abortController.abort();
    };
  });
</script>

{#if data.user && data.user.profiles}
  <Main />
{/if}
