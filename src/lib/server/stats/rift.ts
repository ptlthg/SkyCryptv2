import * as constants from "$lib/server/constants/constants";
import type { Member } from "$types/global";

function getTimecharms(userProfile: Member) {
  const output = [];
  for (const timecharm of constants.RIFT_TIMECHARMS) {
    const charmData = userProfile.rift?.gallery?.secured_trophies?.find((a) => a.type === timecharm.id);

    output.push({
      name: timecharm.name,
      id: timecharm.id,
      texture: timecharm.texture,
      unlocked: charmData !== undefined,
      unlockedAt: charmData?.timestamp ?? null
    });
  }

  return {
    timecharmsFound: output.filter((a) => a.unlocked).length,
    timecharms: output
  };
}

function getPorhtals(userProfile: Member) {
  const output = [];
  for (const [key, porhtal] of constants.RIFT_EYES.entries()) {
    const porhtalData = userProfile.rift?.wither_cage?.killed_eyes && userProfile.rift?.wither_cage.killed_eyes[key] !== undefined;

    output.push({
      name: porhtal.name,
      texture: porhtal.texture,
      unlocked: porhtalData ?? false
    });
  }

  return {
    porhtalsFound: output.filter((a) => a.unlocked).length,
    porhtals: output
  };
}

export function getRift(userProfile: Member) {
  return {
    visits: userProfile.player_stats.rift?.visits ?? 0,
    motes: {
      purse: Math.floor(userProfile.currencies?.motes_purse ?? 0),
      lifetime: Math.floor(userProfile.player_stats?.rift?.lifetime_motes_earned ?? 0),
      orbs: userProfile.player_stats?.rift?.motes_orb_pickup ?? 0
    },
    enigma: {
      souls: userProfile.rift?.enigma?.found_souls?.length ?? 0,
      totalSouls: constants.RIFT_ENIGMA_SOULS
    },
    castle: {
      grubberStacks: userProfile.rift?.castle?.grubber_stacks ?? 0,
      maxBurgers: constants.MAX_GRUBBER_STACKS
    },
    porhtal: getPorhtals(userProfile),
    timecharms: getTimecharms(userProfile)
  };
}
