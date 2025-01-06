import { persisted } from "svelte-persisted-store";

// First param `internalPreferences` is the local storage key.
// Second param is the initial value.
export const internalPreferences = persisted("internalPreferences", {
  hasSeenv2Toast: false
});
