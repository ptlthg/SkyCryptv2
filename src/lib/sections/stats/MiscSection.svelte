<script lang="ts">
  import CollapsibleSection from "$lib/components/CollapsibleSection.svelte";
  import Auctions from "./misc/auctions.svelte";
  import Claimed from "./misc/claimed.svelte";
  import Damage from "./misc/damage.svelte";
  import Dragons from "./misc/dragons.svelte";
  import Endstone from "./misc/endstone.svelte";
  import Essence from "./misc/essence.svelte";
  import Gifts from "./misc/gifts.svelte";
  import Jerry from "./misc/jerry.svelte";
  import Kills from "./misc/kills.svelte";
  import Mythological from "./misc/mythological.svelte";
  import Pet from "./misc/pet.svelte";
  import Potions from "./misc/potions.svelte";
  import Races from "./misc/races.svelte";
  import Uncategorized from "./misc/uncategorized.svelte";
  import Upgrades from "./misc/upgrades.svelte";

  let { order }: { order: number } = $props();
</script>

<CollapsibleSection id="Miscellaneous" class="mb-4" {order}>
  <Essence />
  <!-- TODO: Essence Shop -->
  <Kills />
  <Races />
  <Gifts />
  <Jerry />
  <Dragons />
  <Endstone />
  <Damage />
  <Pet />
  <Mythological />
  <Potions />
  <Upgrades />
  <Auctions />
  <Claimed />
  <Uncategorized />
</CollapsibleSection>
