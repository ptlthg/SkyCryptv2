<script lang="ts">
  import { calculatePercentage, formatNumber } from "$lib/shared/helper";
  import { cn, flyAndScale } from "$lib/shared/utils";
  import type { Skill } from "$lib/types/global";
  import { Avatar, Progress, Tooltip } from "bits-ui";
  import BarChartHorizontal from "lucide-svelte/icons/bar-chart-horizontal";
  import { format } from "numerable";
  import { createHover } from "svelte-interactions";

  type Props = {
    skill: string;
    skillData: Skill;
    apiEnabled?: boolean;
    class?: string | null | undefined;
  };

  let { skill, skillData, apiEnabled = true, class: className }: Props = $props();

  const { hoverAction, isHovered } = createHover();

  const isMaxed = $derived(skillData.maxed);
</script>

<div class={cn("group relative flex flex-grow basis-full flex-col sm:basis-1/3 sm:last:grow-0 sm:last:basis-1/2", !apiEnabled && "opacity-50 grayscale", className)} data-hover={$isHovered} data-maxed={isMaxed} use:hoverAction>
  <Tooltip.Root group="skills" openDelay={0} closeDelay={0}>
    <Tooltip.Trigger class={cn("group-data-[maxed=true]:shine absolute bottom-0 left-0 z-10 flex size-9 items-center justify-center rounded-full p-1 drop-shadow group-data-[maxed=false]:bg-icon group-data-[maxed=true]:bg-maxed", apiEnabled ? "" : "bg-gray-600")}>
      <Avatar.Root class="select-none">
        <Avatar.Image loading="lazy" class={cn("pointer-events-none size-[1.625rem]", !apiEnabled && "grayscale")} src={skillData.texture} alt={skill} />
        <Avatar.Fallback>
          <BarChartHorizontal class="pointer-events-none size-6" />
        </Avatar.Fallback>
      </Avatar.Root>
    </Tooltip.Trigger>
    {#if apiEnabled}
      <Tooltip.Content class="z-50 rounded-lg bg-background-grey p-4" transition={flyAndScale} transitionConfig={{ y: 8, duration: 150 }} sideOffset={6} side="top" align="center">
        <Tooltip.Arrow />
        <div class="text-lg font-semibold text-text">
          <span class="text-text/80">Rank:</span>
          {`#${skillData.rank ?? "N/A"}`}
        </div>
      </Tooltip.Content>
    {/if}
  </Tooltip.Root>

  <div class="relative ml-10 text-sm font-semibold capitalize">
    {skill}
    <span class="text-text/80">
      {skillData.level}
    </span>
  </div>
  <Progress.Root value={skillData.xpCurrent} max={isMaxed ? skillData.xpCurrent : skillData.xpForNext} class={cn("relative ml-2 h-4 w-full overflow-hidden rounded-full", apiEnabled ? "bg-text/30" : "bg-gray-500")}>
    {#if apiEnabled}
      <div class="absolute z-10 flex h-full w-full justify-center">
        <div class="text-xs font-semibold shadow-background/50 text-shadow">
          {#if $isHovered && !isMaxed}
            {format(skillData.xpCurrent, "0,0")} / {format(skillData.xpForNext)}
          {:else if !isMaxed}
            {formatNumber(skillData.xpCurrent)} / {formatNumber(skillData.xpForNext)}
          {/if}

          {#if $isHovered && isMaxed}
            {format(skillData.xpCurrent, "0,0")}
          {:else if isMaxed}
            {formatNumber(skillData.xpCurrent)}
          {/if}
          XP
        </div>
      </div>
    {/if}
    <div class={cn("h-full w-full flex-1 rounded-full transition-all duration-1000 ease-in-out group-data-[maxed=true]:[background:--maxedbar] group-data-[maxed=false]:[background:--skillbar]", apiEnabled ? "" : "bg-gray-500")} style={`transform: translateX(-${100 - parseFloat(calculatePercentage(skillData.xpCurrent, isMaxed ? skillData.xpCurrent : skillData.xpForNext))}%)`}></div>
  </Progress.Root>
</div>
