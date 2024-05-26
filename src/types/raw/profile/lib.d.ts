import type { Pet } from '$types/global';

export type Options = {
	cacheOnly: boolean;
};

export type ProfilesResponse = {
	success: boolean;
	cause?: string;
	profiles: Profile[];
};

export type Profile = {
	profile_id: string;
	cute_name: string;
	selected: boolean;
	game_mode: string;
	uuid: string;
	members: Record<string, Member>;
	banking: Banking;
};

export type Member = {
	player_data?: PlayerData;
	jacobs_contest?: JacobsContest;
	leveling?: Leveling;
	profile?: MemberProfile;
	currencies?: Currencies;
	fairy_soul?: FairySouls;
	inventory?: Inventory;
	rift?: Rift;
	nether_island_player_data?: CrimsonIsle;
	kills: Record<string, number>;
	collections: Collections;
	pets_data: ProfilePets;
	mining_core: Mining;
	objectives: Objectives;
	quests: Quests;
};

export type Medal = 'gold' | 'silver' | 'bronze';

export type JacobsContest = {
	perks?: Record<string, number>;
	unique_brackets?: Record<Medal, string[]>;
	medals_inv?: Record<Medal, number>;
	contests: Record<string, Contest>;
};

export type Quests = {
	trapper_quest: {
		pelt_count: number;
	};
};

export type Contest = {
	collected: number;
	claimed_rewards?: boolean;
	claimed_position?: number;
	claimed_participants?: number;
	claimed_medal: Medal;
};

export type Leveling = {
	experience: number;
};

export type MemberProfile = {
	first_join?: number;
	cookie_buff_active?: boolean;
};

export type Banking = {
	balance: number;
};

export type FairySouls = {
	total_collected: number;
};

export type Inventory = {
	inv_contents?: DecodedInventory;
	ender_chest_contents?: DecodedInventory;
	backpack_icons?: Record<string, DecodedInventory>;
	bag_contents?: BagContents;
	inv_armor?: DecodedInventory;
	equipment_contents?: DecodedInventory;
	personal_vault_contents?: DecodedInventory;
	backpack_contents?: Record<string, DecodedInventory>;
	wardrobe_contents?: DecodedInventory;
};

export type BagContents = {
	potion_bag?: DecodedInventory;
	talisman_bag?: DecodedInventory;
	fishing_bag?: DecodedInventory;
	sacks_bag?: DecodedInventory;
	quiver?: DecodedInventory;
};

export type DecodedInventory = {
	type: number;
	data: string;
};

export type PlayerData = {
	experience?: Experience;
};

export type Experience = {
	SKILL_FISHING?: number;
	SKILL_ALCHEMY?: number;
	SKILL_DUNGEONEERING?: number;
	SKILL_RUNECRAFTING?: number;
	SKILL_MINING?: number;
	SKILL_FARMING?: number;
	SKILL_ENCHANTING?: number;
	SKILL_TAMING?: number;
	SKILL_FORAGING?: number;
	SKILL_SOCIAL?: number;
	SKILL_CARPENTRY?: number;
	SKILL_COMBAT?: number;
};

export type Rift = {
	access?: {
		consumed_prism?: boolean;
	};
	dead_cats?: {
		found_cats?: string[];
		montezuma?: Pet;
	};
};

export type CrimsonIsle = {
	abiphone?: {
		active_contacts: string[];
	};
};

export type ProfilePets = {
	pets: Pet[];
};

export type Mining = {
	nodes: Record<string, number>;

	experience: number;

	greater_mines_last_access: number;
	last_reset: number;

	tokens_spent: number;
	selected_pickaxe_ability: string;

	powder_mithril: number;
	powder_mithril_total: number;
	powder_spent_mithril: number;
	powder_gemstone: number;
	powder_gemstone_total: number;
	powder_spent_gemstone: number;
	powder_glacite: number;
	powder_glacite_total: number;
	powder_spent_glacite: number;

	crystals: Record<string, Crystal>;

	biomes: {
		precursor: {
			parts_delivered: string[];
		};
	};
};

export type Objectives = {
	tutorial?: string[];
};

export type Crystal = {
	state: string;
	total_found: number;
	total_placed: number;
};
