import type { SectionID } from "$lib/sections/types";
import { persisted } from "svelte-persisted-store";

// First param `internalPreferences` is the local storage key.
// Second param is the initial value.
export const internalPreferences = persisted("internalPreferences", {
  hasSeenv2Toast: false
});

export const collapsePreferences = persisted<Record<string, boolean>>("collapsePreferences", {});

export const sectionOrderPreferences = persisted<SectionID[]>("sectionOrderPreferences", [
  { id: 0, name: "Armor" },
  { id: 1, name: "Weapons" },
  { id: 2, name: "Accessories" },
  { id: 3, name: "Pets" },
  { id: 4, name: "Inventory" },
  { id: 5, name: "Skills" },
  { id: 6, name: "Dungeons" },
  { id: 7, name: "Slayer" },
  { id: 8, name: "Minions" },
  { id: 9, name: "Bestiary" },
  { id: 10, name: "Collections" },
  { id: 11, name: "Crimson_Isle" },
  { id: 12, name: "Rift" },
  { id: 13, name: "Misc" }
]);
