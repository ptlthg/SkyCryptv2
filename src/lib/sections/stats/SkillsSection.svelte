<script lang="ts">
  import { getProfileCtx } from "$ctx/profile.svelte";
  import CollapsibleSection from "$lib/components/CollapsibleSection.svelte";
  import Enchanting from "./skills/enchanting.svelte";
  import Farming from "./skills/farming.svelte";
  import Fishing from "./skills/fishing.svelte";
  import Mining from "./skills/mining.svelte";

  const ctx = getProfileCtx();
  const profile = $derived(ctx.profile);
</script>

<CollapsibleSection id="Skills" class="pt-4">
  {#if profile.items && profile.items.mining_tools && profile.mining}
    <Mining />
  {:else}
    <p class="space-x-0.5 leading-6">{profile.username} doesn't have anything related to mining.</p>
  {/if}
  {#if profile.items && profile.items.farming_tools && profile.farming}
    <Farming />
  {:else}
    <p class="space-x-0.5 leading-6">{profile.username} doesn't have anything related to farming.</p>
  {/if}
  {#if profile.items && profile.items.fishing_bag && profile.fishing}
    <Fishing />
  {:else}
    <p class="space-x-0.5 leading-6">{profile.username} doesn't have anything related to fishing.</p>
  {/if}
  {#if profile.enchanting}
    <Enchanting />
  {:else}
    <p class="space-x-0.5 leading-6">{profile.username} doesn't have anything related to enchanting.</p>
  {/if}
</CollapsibleSection>
