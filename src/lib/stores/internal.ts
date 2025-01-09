import type { ProcessedSkyBlockItem, ProcessedSkyblockPet } from "$types/global";
import { writable } from "svelte/store";

export const showItem = writable<boolean>(false);
export const itemContent = writable<ProcessedSkyBlockItem | ProcessedSkyblockPet | undefined>();
