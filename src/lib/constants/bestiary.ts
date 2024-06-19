export const BESTIARY_BRACKETS = {
  1: [20, 40, 60, 100, 200, 400, 800, 1400, 2000, 3000, 6000, 12000, 20000, 30000, 40000, 50000, 60000, 72000, 86000, 100000, 200000, 400000, 600000, 800000, 1000000],
  2: [5, 10, 15, 25, 50, 100, 200, 350, 500, 750, 1500, 3000, 5000, 7500, 10000, 12500, 15000, 18000, 21500, 25000, 50000, 100000, 150000, 200000, 250000],
  3: [4, 8, 12, 16, 20, 40, 80, 140, 200, 300, 600, 1200, 2000, 3000, 4000, 5000, 6000, 7200, 8600, 10000, 20000, 40000, 60000, 80000, 100000],
  4: [2, 4, 6, 10, 15, 20, 25, 35, 50, 75, 150, 300, 500, 750, 1000, 1350, 1650, 2000, 2500, 3000, 5000, 10000, 15000, 20000, 25000],
  5: [1, 2, 3, 5, 7, 10, 15, 20, 25, 30, 60, 120, 200, 300, 400, 500, 600, 720, 860, 1000, 2000, 4000, 6000, 8000, 10000],
  6: [1, 2, 3, 5, 7, 9, 14, 17, 21, 25, 50, 80, 125, 175, 250, 325, 425, 525, 625, 750, 1500, 3000, 4500, 6000, 7500],
  7: [1, 2, 3, 5, 7, 9, 11, 14, 17, 20, 30, 40, 55, 75, 100, 150, 200, 275, 375, 500, 1000, 1500, 2000, 2500, 3000]
} as Record<number, number[]>;

export const BESTIARY = {
  dynamic: {
    name: "Private Island",
    texture: "/api/head/c9c8881e42915a9d29bb61a16fb26d059913204d265df5b439b3d792acd56",
    mobs: [
      {
        name: "Creeper",
        cap: 200,
        texture: "/api/head/a68224cf8ed4c03b457bf49beb6f544193679268b8421b01ffce6d27b25ac32d",
        mobs: ["creeper_1"],
        bracket: 1
      },
      {
        name: "Enderman",
        cap: 200,
        texture: "/api/head/96c0b36d53fff69a49c7d6f3932f2b0fe948e032226d5e8045ec58408a36e951",
        mobs: ["enderman_1", "enderman_2", "enderman_3", "enderman_4", "enderman_5", "enderman_6", "enderman_7", "enderman_8", "enderman_9", "enderman_10", "enderman_11", "enderman_12", "enderman_13", "enderman_14", "enderman_15"],
        bracket: 1
      },
      {
        name: "Skeleton",
        cap: 200,
        texture: "/api/head/88eb68a4d38e9f446b8e99275f160302f366ef10216abf948487e582512bd0f3",
        mobs: ["skeleton_1", "skeleton_2", "skeleton_3", "skeleton_4", "skeleton_5", "skeleton_6", "skeleton_7", "skeleton_8", "skeleton_9", "skeleton_10", "skeleton_11", "skeleton_12", "skeleton_13", "skeleton_14", "skeleton_15"],
        bracket: 1
      },
      {
        name: "Slime",
        cap: 200,
        texture: "/api/head/895aeec6b842ada8669f846d65bc49762597824ab944f22f45bf3bbb941abe6c",
        mobs: ["slime_1", "slime_2", "slime_3", "slime_4", "slime_5", "slime_6", "slime_7", "slime_8", "slime_9", "slime_10", "slime_11", "slime_12", "slime_13", "slime_14", "slime_15"],
        bracket: 1
      },
      {
        name: "Spider",
        cap: 200,
        texture: "/api/head/cd541541daaff50896cd258bdbdd4cf80c3ba816735726078bfe393927e57f1",
        mobs: ["spider_1", "spider_2", "spider_3", "spider_4", "spider_5", "spider_6", "spider_7", "spider_8", "spider_9", "spider_10", "spider_11", "spider_12", "spider_13", "spider_14", "spider_15"],
        bracket: 1
      },
      {
        name: "Witch",
        cap: 200,
        texture: "/api/head/fce6604157fc4ab5591e4bcf507a749918ee9c41e357d47376e0ee7342074c90",
        mobs: ["witch_1", "witch_2", "witch_3", "witch_4", "witch_5", "witch_6", "witch_7", "witch_8", "witch_9", "witch_10", "witch_11", "witch_12", "witch_13", "witch_14", "witch_15"],
        bracket: 1
      },
      {
        name: "Zombie",
        cap: 200,
        texture: "/api/head/b3666d1bdf4558b0d16990b241e8185cbf58c3e03c24d904544e8cc65b1c38d1",
        mobs: ["zombie_1", "zombie_2", "zombie_3", "zombie_4", "zombie_5", "zombie_6", "zombie_7", "zombie_8", "zombie_9", "zombie_10", "zombie_11", "zombie_12", "zombie_13", "zombie_14", "zombie_15"],
        bracket: 1
      }
    ]
  },
  hub: {
    name: "Hub",
    texture: "/api/head/d7cc6687423d0570d556ac53e0676cb563bbdd9717cd8269bdebed6f6d4e7bf8",
    mobs: [
      {
        name: "Crypt Ghoul",
        cap: 40000,
        texture: "/api/head/b3666d1bdf4558b0d16990b241e8185cbf58c3e03c24d904544e8cc65b1c38d1",
        mobs: ["unburried_zombie_30"],
        bracket: 1
      },
      {
        name: "Golden Ghoul",
        cap: 4000,
        texture: "/api/head/69be1cf0639c6b7db506686f26af222671ce52321e1c921b296933cd40ac4c62",
        mobs: ["unburried_zombie_60"],
        bracket: 3
      },
      {
        name: "Graveyard Zombie",
        cap: 200,
        texture: "/api/head/b3666d1bdf4558b0d16990b241e8185cbf58c3e03c24d904544e8cc65b1c38d1",
        mobs: ["graveyard_zombie_1"],
        bracket: 1
      },
      {
        name: "Old Wolf",
        cap: 4000,
        texture: "/api/head/d359537c15534f61c1cd886bc118774ed22280e7cdab6613870160aad4ca39",
        mobs: ["old_wolf_50"],
        bracket: 3
      },
      {
        name: "Wolf",
        cap: 40000,
        texture: "/api/head/69d1d3113ec43ac2961dd59f28175fb4718873c6c448dfca8722317d67",
        mobs: ["ruin_wolf_15"],
        bracket: 1
      },
      {
        name: "Zombie Villager",
        cap: 1000,
        texture: "/api/head/e5e08a8776c1764c3fe6a6ddd412dfcb87f41331dad479ac96c21df4bf3ac89c",
        mobs: ["zombie_villager_1"],
        bracket: 4
      }
    ]
  },
  farming_1: {
    name: "The Farming Islands",
    texture: "/api/head/4d3a6bd98ac1833c664c4909ff8d2dc62ce887bdcf3cc5b3848651ae5af6b",
    mobs: [
      {
        name: "Chicken",
        cap: 200,
        texture: "/api/head/ca3582ce4889333dad329e4e24372a03a5daa2c34280c56256af5283edb043f8",
        mobs: ["farming_chicken_1"],
        bracket: 1
      },
      {
        name: "Cow",
        cap: 200,
        texture: "/api/head/5d6c6eda942f7f5f71c3161c7306f4aed307d82895f9d2b07ab4525718edc5",
        mobs: ["farming_cow_1"],
        bracket: 1
      },
      {
        name: "Mushroom Cow",
        cap: 200,
        texture: "/api/head/a163bc416b8e6058f92b231e9a524b7fe118eb6e7eeab4ad16d1b52a3ec04fcd",
        mobs: ["mushroom_cow_1"],
        bracket: 1
      },
      {
        name: "Pig",
        cap: 200,
        texture: "/api/head/621668ef7cb79dd9c22ce3d1f3f4cb6e2559893b6df4a469514e667c16aa4",
        mobs: ["farming_pig_1"],
        bracket: 1
      },
      {
        name: "Rabbit",
        cap: 200,
        texture: "/api/head/8652c62a166203db8e1edee6039b4962224690b1e25b1fe00ca2338c2bf5fb78",
        mobs: ["farming_rabbit_1"],
        bracket: 1
      },
      {
        name: "Sheep",
        cap: 200,
        texture: "/api/head/30f50394c6d7dbc03ea59fdf504020dc5d6548f9d3bc9dcac896bb5ca08587a",
        mobs: ["farming_sheep_1"],
        bracket: 1
      }
    ]
  },
  combat_1: {
    name: "Spiders Den",
    texture: "/api/head/c754318a3376f470e481dfcd6c83a59aa690ad4b4dd7577fdad1c2ef08d8aee6",
    mobs: [
      {
        name: "Arachne",
        cap: 500,
        texture: "/api/head/cd541541daaff50896cd258bdbdd4cf80c3ba816735726078bfe393927e57f1",
        mobs: ["arachne_500", "arachne_300"],
        bracket: 7
      },
      {
        name: "Arachne's Brood",
        cap: 1000,
        texture: "/api/head/cd541541daaff50896cd258bdbdd4cf80c3ba816735726078bfe393927e57f1",
        mobs: ["arachne_brood_200", "arachne_brood_100"],
        bracket: 4
      },
      {
        name: "Arachne's Keeper",
        cap: 400,
        texture: "/api/head/cd541541daaff50896cd258bdbdd4cf80c3ba816735726078bfe393927e57f1",
        mobs: ["arachne_keeper_100"],
        bracket: 5
      },
      {
        name: "Broodmother",
        cap: 400,
        texture: "/api/head/cf0622b3998d42b34d5bc760bb2c83fdbc6e68fab05b7ea17b35097ed81190d6",
        mobs: ["brood_mother_spider_12"],
        bracket: 5
      },
      {
        name: "Dasher Spider",
        cap: 10000,
        texture: "/api/head/cd541541daaff50896cd258bdbdd4cf80c3ba816735726078bfe393927e57f1",
        mobs: ["dasher_spider_50", "dasher_spider_45", "dasher_spider_42", "dasher_spider_4", "dasher_spider_6"],
        bracket: 2
      },
      {
        name: "Gravel Skeleton",
        cap: 4000,
        texture: "/api/head/88eb68a4d38e9f446b8e99275f160302f366ef10216abf948487e582512bd0f3",
        mobs: ["respawning_skeleton_2"],
        bracket: 3
      },
      {
        name: "Rain Slime",
        cap: 1000,
        texture: "/api/head/895aeec6b842ada8669f846d65bc49762597824ab944f22f45bf3bbb941abe6c",
        mobs: ["random_slime_8", "random_slime_20"],
        bracket: 4
      },
      {
        name: "Silverfish",
        cap: 10000,
        texture: "/api/head/da91dab8391af5fda54acd2c0b18fbd819b865e1a8f1d623813fa761e924540",
        mobs: ["jockey_shot_silverfish_3", "splitter_spider_silverfish_2", "splitter_spider_silverfish_45", "splitter_spider_silverfish_42", "splitter_spider_silverfish_50", "jockey_shot_silverfish_42"],
        bracket: 2
      },
      {
        name: "Spider Jockey",
        cap: 4000,
        texture: "/api/head/70939373cafe4b1f5397aafd09f3bb1663e7b629a41a75fbdc1860b6bf8b475f",
        mobs: ["spider_jockey_3", "spider_jockey_42", "spider_jockey_5"],
        bracket: 3
      },
      {
        name: "Splitter Spider",
        cap: 10000,
        texture: "/api/head/2acf69fc7af5497a1741891d1e5bf32b96ae0d6c0bbd3c14758ea44a03c57283",
        mobs: ["splitter_spider_2", "splitter_spider_45", "splitter_spider_42", "splitter_spider_50", "splitter_spider_4", "splitter_spider_6"],
        bracket: 2
      },
      {
        name: "Voracious Spider",
        cap: 10000,
        texture: "/api/head/8300986ed0a04ea79904f6ae53f49ed3a0ff5b1df62bba622ecbd3777f156df8",
        mobs: ["voracious_spider_50", "voracious_spider_42", "voracious_spider_45", "voracious_spider_10"],
        bracket: 2
      },
      {
        name: "Weaver Spider",
        cap: 10000,
        texture: "/api/head/921438f646dc04515967e8195ccc3d31e23b02f9aa0ac914edc2822f98394b86",
        mobs: ["weaver_spider_3", "weaver_spider_4", "weaver_spider_5", "weaver_spider_6", "weaver_spider_42", "weaver_spider_45", "weaver_spider_50"],
        bracket: 2
      }
    ]
  },
  combat_3: {
    name: "The End",
    texture: "/api/head/7840b87d52271d2a755dedc82877e0ed3df67dcc42ea479ec146176b02779a5",
    mobs: [
      {
        name: "Dragon",
        cap: 1000,
        texture: "/api/item/DRAGON_EGG",
        mobs: ["protector_dragon_100", "old_dragon_100", "young_dragon_100", "wise_dragon_100", "superior_dragon_100", "strong_dragon_100", "unstable_dragon_100"],
        bracket: 5
      },
      {
        name: "Enderman",
        cap: 25000,
        texture: "/api/head/96c0b36d53fff69a49c7d6f3932f2b0fe948e032226d5e8045ec58408a36e951",
        mobs: ["enderman_50", "enderman_45", "enderman_42"],
        bracket: 4
      },
      {
        name: "Endermite",
        cap: 10000,
        texture: "/api/head/5a1a0831aa03afb4212adcbb24e5dfaa7f476a1173fce259ef75a85855",
        mobs: ["nest_endermite_50", "endermite_37", "endermite_40"],
        bracket: 5
      },
      {
        name: "Endstone Protector",
        cap: 500,
        texture: "/api/head/22bcaceeb4162f400d44743315932ac820d3119ac8986a0161a726161ccc93fc",
        mobs: ["corrupted_protector_100"],
        bracket: 7
      },
      {
        name: "Obsidian Defender",
        cap: 10000,
        texture: "/api/item/OBSIDIAN",
        mobs: ["obsidian_wither_55"],
        bracket: 5
      },
      {
        name: "Voidling Extremist",
        cap: 4000,
        texture: "/api/head/eb07594e2df273921a77c101d0bfdfa1115abed5b9b2029eb496ceba9bdbb4b3",
        mobs: ["voidling_extremist_100"],
        bracket: 3
      },
      {
        name: "Voidling Fanatic",
        cap: 25000,
        texture: "/api/head/e53b7bcd56f0b95f87dd79ed17636beb9d8346744014228ea2f6b110b148c1",
        mobs: ["voidling_fanatic_85"],
        bracket: 4
      },
      {
        name: "Watcher",
        cap: 10000,
        texture: "/api/head/daa8fc8de6417b48d48c80b443cf5326e3d9da4dbe9b25fcd49549d96168fc0",
        mobs: ["watcher_55"],
        bracket: 5
      },
      {
        name: "Zealot",
        cap: 25000,
        texture: "/api/item/ENDER_CHEST",
        mobs: ["zealot_bruiser_100", "zealot_enderman_55"],
        bracket: 4
      }
    ]
  },
  crimson_isle: {
    name: "Crimson Isle",
    texture: "/api/head/c3687e25c632bce8aa61e0d64c24e694c3eea629ea944f4cf30dcfb4fbce071",
    mobs: [
      {
        name: "Ashfang",
        cap: 1000,
        texture: "/api/head/3d2a5b4b109bd788edba0171d0aab8a55305ac2f56184df70a319cd488a36c3e",
        mobs: ["ashfang_200"],
        bracket: 5
      },
      {
        name: "Barbarian Duke X",
        cap: 1000,
        texture: "/api/head/fee9fc7c181e2f630f6b1af85d4951359cafcfa82ff5ea3bc283e0e6088c6e54",
        mobs: ["barbarian_duke_x_200"],
        bracket: 5
      },
      {
        name: "Bladesoul",
        cap: 1000,
        texture: "/api/head/7f5f3384384d7f03bf97a73099b0bafb72c538fc0415ac8613b664f87579a379",
        mobs: ["bladesoul_200"],
        bracket: 5
      },
      {
        name: "Blaze",
        cap: 3000,
        texture: "/api/head/b78ef2e4cf2c41a2d14bfde9caff10219f5b1bf5b35a49eb51c6467882cb5f0",
        mobs: ["blaze_25", "blaze_70", "bezal_80", "mutated_blaze_70"],
        bracket: 4
      },
      {
        name: "Smoldering Blaze",
        cap: 25000,
        texture: "/api/head/b78ef2e4cf2c41a2d14bfde9caff10219f5b1bf5b35a49eb51c6467882cb5f0",
        mobs: ["smoldering_blaze_95"],
        bracket: 2
      },
      {
        name: "Millenia-Aged Blaze",
        cap: 4000,
        texture: "/api/head/b78ef2e4cf2c41a2d14bfde9caff10219f5b1bf5b35a49eb51c6467882cb5f0",
        mobs: ["old_blaze_110"],
        bracket: 3
      },
      {
        name: "Flaming Spider",
        cap: 10000,
        texture: "/api/head/5a65ef23ea35047150d33880473a47fe635f0c0e3c823bd76dc849cb02441655",
        mobs: ["flaming_spider_80"],
        bracket: 3
      },
      {
        name: "Flare",
        cap: 100000,
        texture: "/api/head/b78ef2e4cf2c41a2d14bfde9caff10219f5b1bf5b35a49eb51c6467882cb5f0",
        mobs: ["flare_90"],
        bracket: 1
      },
      {
        name: "Ghast",
        cap: 3000,
        texture: "/api/head/de8a38e9afbd3da10d19b577c55c7bfd6b4f2e407e44d4017b23be9167abff02",
        mobs: ["ghast_85", "dive_ghast_90"],
        bracket: 4
      },
      {
        name: "Mage Outlaw",
        cap: 1000,
        texture: "/api/head/ebec99b3a050fd277528407676366e20b92006ad88d14727a4d99eb8cb273b62",
        mobs: ["mage_outlaw_200"],
        bracket: 5
      },
      {
        name: "Magma Cube",
        cap: 10000,
        texture: "/api/head/38957d5023c937c4c41aa2412d43410bda23cf79a9f6ab36b76fef2d7c429",
        mobs: ["pack_magma_cube_90", "magma_cube_75", "fireball_magma_cube_75"],
        bracket: 3
      },
      {
        name: "Magma Boss",
        cap: 1000,
        texture: "/api/head/38957d5023c937c4c41aa2412d43410bda23cf79a9f6ab36b76fef2d7c429",
        mobs: ["magma_boss_500"],
        bracket: 5
      },
      {
        name: "Matcho",
        cap: 400,
        texture: "/api/head/ef2daabb78a1f7aa12d145d88c0ca46b9e856f5534e9286e555faf0c291f4fd5",
        mobs: ["matcho_100"],
        bracket: 5
      },
      {
        name: "Mushroom Bull",
        cap: 10000,
        texture: "/api/head/a163bc416b8e6058f92b231e9a524b7fe118eb6e7eeab4ad16d1b52a3ec04fcd",
        mobs: ["charging_mushroom_cow_80"],
        bracket: 3
      },
      {
        name: "Wither Skeleton",
        cap: 3000,
        texture: "/api/head/7953b6c68448e7e6b6bf8fb273d7203acd8e1be19e81481ead51f45de59a8",
        mobs: ["wither_skeleton_70"],
        bracket: 4
      },
      {
        name: "Wither Spectre",
        cap: 10000,
        texture: "/api/head/7f5f3384384d7f03bf97a73099b0bafb72c538fc0415ac8613b664f87579a379",
        mobs: ["wither_spectre_70"],
        bracket: 3
      },
      {
        name: "Tentacle",
        cap: 1000,
        texture: "/api/head/199c3470ba4317913717ab36b626aec0b563266e28b3a517d71e9a0af0c90f96",
        mobs: ["hellwisp_100"],
        bracket: 5
      },
      {
        name: "Vanquisher",
        cap: 1000,
        texture: "/api/head/3f86b3affbf65a91faf084a0cd70e40455130ea99b2b3844d2510e1c8b3a5746",
        mobs: ["vanquisher_100"],
        bracket: 5
      },
      {
        name: "Kada Knight",
        cap: 3000,
        texture: "/api/head/74e9c6e98582ffd8ff8feb3322cd1849c43fb16b158abb11ca7b42eda7743eb",
        mobs: ["kada_knight_90"],
        bracket: 4
      },
      {
        name: "Magma Cube Rider",
        cap: 3000,
        texture: "/api/head/74e9c6e98582ffd8ff8feb3322cd1849c43fb16b158abb11ca7b42eda7743eb",
        mobs: ["magma_cube_rider_90"],
        bracket: 4
      }
    ]
  },
  mining_2: {
    name: "Deep Caverns",
    texture: "/api/head/569a1f114151b4521373f34bc14c2963a5011cdc25a6554c48c708cd96ebfc",
    mobs: [
      {
        name: "Emerald Slime",
        cap: 3000,
        texture: "/api/head/5774e86aa4cff792395b77add57b00bb1a102f8f0f0980f4d55b3d7aff1e6da9",
        mobs: ["emerald_slime_5", "emerald_slime_10", "emerald_slime_15"],
        bracket: 1
      },
      {
        name: "Miner Skeleton",
        cap: 3000,
        texture: "/api/head/836bbc4215cea1b6a484e893b116e73459ef36bffc622741e577e9493a41e6e",
        mobs: ["diamond_skeleton_15", "diamond_skeleton_20"],
        bracket: 1
      },
      {
        name: "Miner Zombie",
        cap: 3000,
        texture: "/api/head/d28d9ff54188a1afee65b94f3bfcce321c643a34590c14b192b2e3ec2f525d3",
        mobs: ["diamond_zombie_15", "diamond_zombie_20"],
        bracket: 1
      },
      {
        name: "Redstone Pigman",
        cap: 3000,
        texture: "/api/head/74e9c6e98582ffd8ff8feb3322cd1849c43fb16b158abb11ca7b42eda7743eb",
        mobs: ["redstone_pigman_10"],
        bracket: 1
      },
      {
        name: "Sneaky Creeper",
        cap: 300,
        texture: "/api/head/a68224cf8ed4c03b457bf49beb6f544193679268b8421b01ffce6d27b25ac32d",
        mobs: ["invisible_creeper_3"],
        bracket: 3
      },
      {
        name: "Lapis Zombie",
        cap: 3000,
        texture: "/api/head/e9f7979b25001087969d58c06e14d00b8dab57dab060b4c8b483c1b7f869940",
        mobs: ["lapis_zombie_7"],
        bracket: 1
      }
    ]
  },
  mining_3: {
    name: "Dwarven Mines",
    texture: "/api/head/6b20b23c1aa2be0270f016b4c90d6ee6b8330a17cfef87869d6ad60b2ffbf3b5",
    mobs: [
      {
        name: "Diamond Goblin",
        cap: 100,
        texture: "/api/head/81d2116827a41a713660bb52c9ba3bc6dd038175afb74a473b85f0cf60ff70e2",
        mobs: ["goblin_500"],
        bracket: 7
      },
      {
        name: "Ghost",
        cap: 250000,
        texture: "/api/head/981977918a1180e0dec879e6bcd1aa39494977bb913be2ab01aff1db1fa4",
        mobs: ["caverns_ghost_250"],
        bracket: 2
      },
      {
        name: "Goblin",
        cap: 25000,
        texture: "/api/head/172850906b7f0d952c0e508073cc439fd3374ccf5b889c06f7e8d90cc0cc255c",
        mobs: ["goblin_weakling_melee_25", "goblin_weakling_melee_40", "goblin_weakling_bow_25", "goblin_weakling_bow_40", "goblin_creepertamer_100", "goblin_pitfighter_70", "goblin_knife_thrower_25", "goblin_knife_thrower_40", "goblin_flamethrower_100", "goblin_murderlover_200"],
        bracket: 2
      },
      {
        name: "Goblin Raiders",
        cap: 1000,
        texture: "/api/head/172850906b7f0d952c0e508073cc439fd3374ccf5b889c06f7e8d90cc0cc255c",
        mobs: ["goblin_weakling_melee_5", "goblin_weakling_bow_5", "goblin_creepertamer_90", "goblin_creeper_20", "goblin_battler_60", "goblin_murderlover_150", "goblin_golem_150"],
        bracket: 4
      },
      {
        name: "Golden Goblin",
        cap: 400,
        texture: "/api/head/29d9fbe74cbd9ebeda4d571a4176c66e298ec409dc10510f6ddf1496f48840b1",
        mobs: ["goblin_50"],
        bracket: 5
      },
      {
        name: "Glacite Walker",
        cap: 10000,
        texture: "/api/item/PACKED_ICE",
        mobs: ["ice_walker_45"],
        bracket: 2
      },
      {
        name: "Powder Ghast",
        cap: 200,
        texture: "/api/head/de8a38e9afbd3da10d19b577c55c7bfd6b4f2e407e44d4017b23be9167abff02",
        mobs: ["powder_ghast_1"],
        bracket: 1
      },
      {
        name: "Star Sentry",
        cap: 1000,
        texture: "/api/head/d87b8f3cf1c1014883276f230501d5af1397699071bfab1ee294c861722cc2f",
        mobs: ["crystal_sentry_50"],
        bracket: 4
      },
      {
        name: "Treasure Hoarder",
        cap: 4000,
        texture: "/api/head/b2b12a814ced8af02cddf29a37e7f3011e430e8a18b38b706f27c6bd31650b65",
        mobs: ["treasure_hoarder_70"],
        bracket: 3
      },
      {
        name: "Glacite Bowman",
        cap: 1000,
        texture: "/api/head/d2a0057edd8e8480f0ea2a78c1ad88e401c4844f4458aeb4e33ac93a58b8c11a",
        mobs: ["glacite_bowman_165"],
        bracket: 4
      },
      {
        name: "Glacite Caver",
        cap: 1000,
        texture: "/api/head/d2a0057edd8e8480f0ea2a78c1ad88e401c4844f4458aeb4e33ac93a58b8c11a",
        mobs: ["glacite_caver_200"],
        bracket: 4
      },
      {
        name: "Glacite Mage",
        cap: 1000,
        texture: "/api/head/d2a0057edd8e8480f0ea2a78c1ad88e401c4844f4458aeb4e33ac93a58b8c11a",
        mobs: ["glacite_mage_155"],
        bracket: 4
      },
      {
        name: "Glacite Mutt",
        cap: 1000,
        texture: "/api/head/69d1d3113ec43ac2961dd59f28175fb4718873c6c448dfca8722317d67",
        mobs: ["glacite_mutt_180"],
        bracket: 4
      }
    ]
  },
  crystal_hollows: {
    name: "Crystal Hollows",
    texture: "/api/head/21dbe30b027acbceb612563bd877cd7ebb719ea6ed1399027dcee58bb9049d4a",
    mobs: [
      {
        name: "Thyst",
        cap: 4000,
        texture: "/api/head/5a1a0831aa03afb4212adcbb24e5dfaa7f476a1173fce259ef75a85855",
        mobs: ["thyst_20"],
        bracket: 3
      },
      {
        name: "Worm",
        cap: 400,
        texture: "/api/head/df03ad96092f3f789902436709cdf69de6b727c121b3c2daef9ffa1ccaed186c",
        mobs: ["worm_5", "scatha_10"],
        bracket: 5
      },
      {
        name: "Yog",
        cap: 4000,
        texture: "/api/head/38957d5023c937c4c41aa2412d43410bda23cf79a9f6ab36b76fef2d7c429",
        mobs: ["yog_100"],
        bracket: 3
      },
      {
        name: "Sludge",
        cap: 10000,
        texture: "/api/head/895aeec6b842ada8669f846d65bc49762597824ab944f22f45bf3bbb941abe6c",
        mobs: ["sludge_5", "sludge_10", "sludge_100"],
        bracket: 2
      },
      {
        name: "Automaton",
        cap: 10000,
        texture: "/api/head/22bcaceeb4162f400d44743315932ac820d3119ac8986a0161a726161ccc93fc",
        mobs: ["automaton_100", "automaton_150"],
        bracket: 2
      },
      {
        name: "Butterfly",
        cap: 1000,
        texture: "/api/head/9fd806defdfdf59b1f2609c8ee364666de66127a623415b5430c9358c601ef7c",
        mobs: ["butterfly_100"],
        bracket: 4
      },
      {
        name: "Grunt",
        cap: 4000,
        texture: "/api/head/ef5e03b8de119f8589a808224cbea737f5dcf24235799b7378ac5bf06abf6dd4",
        mobs: ["team_treasurite_grunt_50", "team_treasurite_viper_100", "team_treasurite_wendy_100", "team_treasurite_sebastian_100", "team_treasurite_corleone_200"],
        bracket: 3
      },
      {
        name: "Bal",
        cap: 250,
        texture: "/api/head/a1c97a06efde04d00287bf20416404ab2103e10f08623087e1b0c1264a1c0f0c",
        mobs: ["bal_boss_100"],
        bracket: 6
      },
      {
        name: "Key Guardian",
        cap: 250,
        texture: "/api/item/TRIPWIRE_HOOK",
        mobs: ["key_guardian_100"],
        bracket: 6
      }
    ]
  },
  foraging_1: {
    name: "The Park",
    texture: "/api/head/a221f813dacee0fef8c59f76894dbb26415478d9ddfc44c2e708a6d3b7549b",
    mobs: [
      {
        name: "Howling Spirit",
        cap: 10000,
        texture: "/api/head/69d1d3113ec43ac2961dd59f28175fb4718873c6c448dfca8722317d67",
        mobs: ["howling_spirit_35"],
        bracket: 2
      },
      {
        name: "Pack Spirit",
        cap: 10000,
        texture: "/api/head/69d1d3113ec43ac2961dd59f28175fb4718873c6c448dfca8722317d67",
        mobs: ["pack_spirit_30"],
        bracket: 2
      },
      {
        name: "Soul of the Alpha",
        cap: 1000,
        texture: "/api/head/d359537c15534f61c1cd886bc118774ed22280e7cdab6613870160aad4ca39",
        mobs: ["soul_of_the_alpha_55"],
        bracket: 4
      }
    ]
  },
  spooky_festival: {
    name: "Spooky Festival",
    texture: "/api/item/PUMPKIN",
    mobs: [
      {
        name: "Grim Reaper",
        cap: 100,
        texture: "/api/head/68a6194a5b217b9f5a3dfecce5f3efe6967405039b82fa0c4e8959175f32e75a",
        mobs: ["grim_reaper_190"],
        bracket: 7
      },
      {
        name: "Nightmare",
        cap: 1000,
        texture: "/api/head/578211e1b4d99d1c7bfda4838e48fc884c3eae376f58d932bc2f78b0a919f8e7",
        mobs: ["nightmare_24"],
        bracket: 4
      },
      {
        name: "Phantom Fisher",
        cap: 250,
        texture: "/api/head/6c9bc01f299f98d565a27ba10a1293915ae8beeefb8a67845e2331dbe6fd6fd6",
        mobs: ["phantom_fisherman_160"],
        bracket: 6
      },
      {
        name: "Scarecrow",
        cap: 4000,
        texture: "/api/item/PUMPKIN",
        mobs: ["scarecrow_9"],
        bracket: 3
      },
      {
        name: "Werewolf",
        cap: 1000,
        texture: "/api/head/ce4606c6d973a999aec1687c7e075f7d37db8185e88b844507f16b3e2b3eb690",
        mobs: ["werewolf_50"],
        bracket: 4
      }
    ]
  },
  mythological_creatures: {
    name: "Mythological Creatures",
    texture: "/api/head/83cc1cf672a4b2540be346ead79ac2d9ed19d95b6075bf95be0b6d0da61377be",
    mobs: [
      {
        name: "Gaia Construct",
        cap: 3000,
        texture: "/api/head/22bcaceeb4162f400d44743315932ac820d3119ac8986a0161a726161ccc93fc",
        mobs: ["gaia_construct_140", "gaia_construct_260"],
        bracket: 4
      },
      {
        name: "Minos Champion",
        cap: 1000,
        texture: "/api/head/eefcd13d5877ee4edd83a342088520a9cf2265484bfb93aa135cacd651b4fe85",
        mobs: ["minos_champion_175", "minos_champion_310"],
        bracket: 5
      },
      {
        name: "Minos Hunter",
        cap: 1000,
        texture: "/api/head/db705068740cd6b4c2b0263daeab6103d652b9efbcaad8acbabee68e6fd1c4b4",
        mobs: ["minos_hunter_125", "minos_hunter_15", "minos_hunter_60"],
        bracket: 5
      },
      {
        name: "Minos Inquisitor",
        cap: 500,
        texture: "/api/head/19aac356dbbef3ea7ee3440d7b3ab9efc2965e259fadcb9b0851b0b244347b7d",
        mobs: ["minos_inquisitor_750"],
        bracket: 7
      },
      {
        name: "Minotaur",
        cap: 3000,
        texture: "/api/head/7f92d814b997fb7a676fc8cd15df23b7d485d6111060b3f1de3dd1b9cfa8111c",
        mobs: ["minotaur_45", "minotaur_120", "minotaur_210"],
        bracket: 4
      },
      {
        name: "Siamese Lynx",
        cap: 3000,
        texture: "/api/head/e18f77331b2cab64e2b430fa8e4273e4db7f78fcdfa4b1a9a418af47375056eb",
        mobs: ["siamese_lynx_25", "siamese_lynx_85", "siamese_lynx_155"],
        bracket: 4
      }
    ]
  },
  jerry: {
    name: "Jerry",
    texture: "/api/head/45f729736996a38e186fe9fe7f5a04b387ed03f3871ecc82fa78d8a2bdd31109",
    mobs: [
      {
        name: "Blue Jerry",
        cap: 30,
        texture: "/api/head/822d8e751c8f2fd4c8942c44bdb2f5ca4d8ae8e575ed3eb34c18a86e93b",
        mobs: ["mayor_jerry_blue_2"],
        bracket: 5
      },
      {
        name: "Golden Jerry",
        cap: 20,
        texture: "/api/head/822d8e751c8f2fd4c8942c44bdb2f5ca4d8ae8e575ed3eb34c18a86e93b",
        mobs: ["mayor_jerry_golden_5"],
        bracket: 7
      },
      {
        name: "Green Jerry",
        cap: 75,
        texture: "/api/head/822d8e751c8f2fd4c8942c44bdb2f5ca4d8ae8e575ed3eb34c18a86e93b",
        mobs: ["mayor_jerry_green_1"],
        bracket: 4
      },
      {
        name: "Purple Jerry",
        cap: 25,
        texture: "/api/head/822d8e751c8f2fd4c8942c44bdb2f5ca4d8ae8e575ed3eb34c18a86e93b",
        mobs: ["mayor_jerry_purple_3"],
        bracket: 6
      }
    ]
  },
  kuudra: {
    name: "Kuudra",
    texture: "/api/head/5051c83d9ebf69013f1ec8c9efc979ec2d925a921cc877ff64abe09aadd2f6cc",
    mobs: [
      {
        name: "Blazing Golem",
        cap: 300,
        texture: "/api/head/22bcaceeb4162f400d44743315932ac820d3119ac8986a0161a726161ccc93fc",
        mobs: ["blazing_golem_100", "blazing_golem_200", "blazing_golem_300", "blazing_golem_400", "blazing_golem_500"],
        bracket: 3
      },
      {
        name: "Blight",
        cap: 10000,
        texture: "/api/head/ae2ff1efd2ef35a9b685caa1788580237eaf0a1e54a12568ad606c9453ee6c68",
        mobs: ["blight_100", "blight_200", "blight_300", "blight_400", "blight_500"],
        bracket: 3
      },
      {
        name: "Dropship",
        cap: 300,
        texture: "/api/head/de8a38e9afbd3da10d19b577c55c7bfd6b4f2e407e44d4017b23be9167abff02",
        mobs: ["dropship_100", "dropship_200", "dropship_300", "dropship_400", "dropship_500"],
        bracket: 3
      },
      {
        name: "Explosive Imp",
        cap: 3000,
        texture: "/api/head/deebb8b03cd27d3435e115616b8ed35dcb427af5b0b1cc526d3265a72d493e",
        mobs: ["explosive_imp_100", "explosive_imp_200", "explosive_imp_300", "explosive_imp_400", "explosive_imp_500"],
        bracket: 4
      },
      {
        name: "Inferno Magma Cube",
        cap: 10000,
        texture: "/api/head/38957d5023c937c4c41aa2412d43410bda23cf79a9f6ab36b76fef2d7c429",
        mobs: ["inferno_magma_cube_100", "inferno_magma_cube_200", "inferno_magma_cube_300", "inferno_magma_cube_400", "inferno_magma_cube_500"],
        bracket: 3
      },
      {
        name: "Kuudra Berserker",
        cap: 10000,
        texture: "/api/head/32f94e36f698649bc3d58dfde1b2b6552d068200bfd8b1372e33d4566e6a78d8",
        mobs: ["kuudra_berserker_100", "kuudra_berserker_200", "kuudra_berserker_300", "kuudra_berserker_400", "kuudra_berserker_500"],
        bracket: 3
      },
      {
        name: "Kuudra Follower",
        cap: 25000,
        texture: "/api/head/935541523f14c78d8de98cc296c798f0b867ba85344ed77f6dae12455a174",
        mobs: ["kuudra_follower_100", "kuudra_follower_200", "kuudra_follower_300", "kuudra_follower_400", "kuudra_follower_500"],
        bracket: 2
      },
      {
        name: "Kuudra Knocker",
        cap: 10000,
        texture: "/api/head/95fb2df754c98b742d35e7b81a1eeac9d37c69fc8cfecd3e91c67983516f",
        mobs: ["kuudra_knocker_100", "kuudra_knocker_200", "kuudra_knocker_300", "kuudra_knocker_400", "kuudra_knocker_500"],
        bracket: 3
      },
      {
        name: "Kuudra Landmine",
        cap: 10000,
        texture: "/api/head/a76a2811d1e176a07b6d0a657b910f134896ce30850f6e80c7c83732d85381ea",
        mobs: ["kuudra_landmine_100", "kuudra_landmine_200", "kuudra_landmine_300", "kuudra_landmine_400", "kuudra_landmine_500"],
        bracket: 3
      },
      {
        name: "Kuudra Slasher",
        cap: 30,
        texture: "/api/head/38957d5023c937c4c41aa2412d43410bda23cf79a9f6ab36b76fef2d7c429",
        mobs: ["kuudra_slasher_100", "kuudra_slasher_200", "kuudra_slasher_300", "kuudra_slasher_400", "kuudra_slasher_500"],
        bracket: 5
      },
      {
        name: "Magma Follower",
        cap: 30,
        texture: "/api/head/38957d5023c937c4c41aa2412d43410bda23cf79a9f6ab36b76fef2d7c429",
        mobs: ["magma_follower_100", "magma_follower_200", "magma_follower_300", "magma_follower_400", "magma_follower_500"],
        bracket: 5
      },
      {
        name: "Wandering Blaze",
        cap: 3000,
        texture: "/api/head/3d2a5b4b109bd788edba0171d0aab8a55305ac2f56184df70a319cd488a36c3e",
        mobs: ["wandering_blaze_100", "wandering_blaze_200", "wandering_blaze_300", "wandering_blaze_400", "wandering_blaze_500"],
        bracket: 4
      },
      {
        name: "Wither Sentry",
        cap: 75,
        texture: "/api/head/f5ec964645a8efac76be2f160d7c9956362f32b6517390c59c3085034f050cff",
        mobs: ["wither_sentry_100", "wither_sentry_200", "wither_sentry_300", "wither_sentry_400", "wither_sentry_500"],
        bracket: 4
      }
    ]
  },
  fishing: {
    name: "Fishing",
    texture: "/api/head/d88ba8bb50b79e441e47b7e452764d5fff6693779d2dadd9f7f52f98d7ea0",
    mobs: [
      {
        name: "Agarimoo",
        cap: 4000,
        texture: "/api/head/3d597f77cde32c9ac9b06f82fcf7c9cb500facc14bff166222b24be39962f0ef",
        mobs: ["agarimoo_35"],
        bracket: 3
      },
      {
        name: "Carrot King",
        cap: 400,
        texture: "/api/head/1f59851de93f4c6547f809ca3aed189e94bbf4f888f1f75208e94c3733852a1",
        mobs: ["carrot_king_25"],
        bracket: 5
      },
      {
        name: "Catfish",
        cap: 1000,
        texture: "/api/head/e18f77331b2cab64e2b430fa8e4273e4db7f78fcdfa4b1a9a418af47375056eb",
        mobs: ["catfish_23"],
        bracket: 4
      },
      {
        name: "Deep Sea Protector",
        cap: 1000,
        texture: "/api/head/22bcaceeb4162f400d44743315932ac820d3119ac8986a0161a726161ccc93fc",
        mobs: ["deep_sea_protector_60"],
        bracket: 4
      },
      {
        name: "Guardian Defender",
        cap: 1000,
        texture: "/api/head/221025434045bda7025b3e514b316a4b770c6faa4ba9adb4be3809526db77f9d",
        mobs: ["guardian_defender_45"],
        bracket: 4
      },
      {
        name: "Night Squid",
        cap: 1000,
        texture: "/api/head/d8705624daa2956aa45956c81bab5f4fdb2c74a596051e24192039aea3a8b8",
        mobs: ["night_squid_6"],
        bracket: 4
      },
      {
        name: "Oasis Rabbit",
        cap: 300,
        texture: "/api/head/1f59851de93f4c6547f809ca3aed189e94bbf4f888f1f75208e94c3733852a1",
        mobs: ["oasis_rabbit_10"],
        bracket: 3
      },
      {
        name: "Oasis Sheep",
        cap: 300,
        texture: "/api/head/292df216ecd27624ac771bacfbfe006e1ed84a79e9270be0f88e9c8791d1ece4",
        mobs: ["oasis_sheep_10"],
        bracket: 3
      },
      {
        name: "Poisoned Water Worm",
        cap: 1000,
        texture: "/api/head/5a1a0831aa03afb4212adcbb24e5dfaa7f476a1173fce259ef75a85855",
        mobs: ["poisoned_water_worm_25"],
        bracket: 4
      },
      {
        name: "Rider of the Deep",
        cap: 4000,
        texture: "/api/head/cfb7dbbe002f69463768113c1e925848197f59b62694ce105792dd5a52dc17a1",
        mobs: ["zombie_deep_20", "chicken_deep_20"],
        bracket: 3
      },
      {
        name: "Sea Archer",
        cap: 4000,
        texture: "/api/head/88eb68a4d38e9f446b8e99275f160302f366ef10216abf948487e582512bd0f3",
        mobs: ["sea_archer_15"],
        bracket: 3
      },
      {
        name: "Sea Guardian",
        cap: 4000,
        texture: "/api/head/221025434045bda7025b3e514b316a4b770c6faa4ba9adb4be3809526db77f9d",
        mobs: ["sea_guardian_10"],
        bracket: 3
      },
      {
        name: "Sea Leech",
        cap: 1000,
        texture: "/api/head/da91dab8391af5fda54acd2c0b18fbd819b865e1a8f1d623813fa761e924540",
        mobs: ["sea_leech_30"],
        bracket: 4
      },
      {
        name: "Sea Walker",
        cap: 4000,
        texture: "/api/head/d88ba8bb50b79e441e47b7e452764d5fff6693779d2dadd9f7f52f98d7ea0",
        mobs: ["sea_walker_4"],
        bracket: 3
      },
      {
        name: "Sea Witch",
        cap: 4000,
        texture: "/api/head/fce6604157fc4ab5591e4bcf507a749918ee9c41e357d47376e0ee7342074c90",
        mobs: ["sea_witch_15"],
        bracket: 3
      },
      {
        name: "Squid",
        cap: 10000,
        texture: "/api/head/d8705624daa2956aa45956c81bab5f4fdb2c74a596051e24192039aea3a8b8",
        mobs: ["pond_squid_1"],
        bracket: 2
      },
      {
        name: "The Sea Emperor",
        cap: 100,
        texture: "/api/head/044b653bbb727b5c865a8efc75092afe939e2c3e68613db9abae4f1b64f99f8",
        mobs: ["skeleton_emperor_150", "guardian_emperor_150"],
        bracket: 7
      },
      {
        name: "Water Hydra",
        cap: 400,
        texture: "/api/head/21ffbda92442873d54051e4e17ea47278cb3b747d798070ba83bc4a9de58dd",
        mobs: ["water_hydra_100"],
        bracket: 5
      },
      {
        name: "Water Worm",
        cap: 1000,
        texture: "/api/head/da91dab8391af5fda54acd2c0b18fbd819b865e1a8f1d623813fa761e924540",
        mobs: ["water_worm_20"],
        bracket: 4
      },
      {
        name: "Abyssal Miner",
        cap: 250,
        texture: "/api/head/58be05cfae2c6a7d47da2ce88b3e00c72a145cc3218f041b3dd5bd5fa5ca827",
        mobs: ["zombie_miner_150"],
        bracket: 6
      }
    ]
  },
  lava: {
    name: "Lava",
    texture: "/api/head/1642a06cd75ef307c1913ba7a224fb2082d8a2c5254fd1bf006125a087a9a868",
    mobs: [
      {
        name: "Fire Eel",
        cap: 1000,
        texture: "/api/head/c63704a7fc7d437f7b923e23e9a08ae3bbe28937df4dafa9e3e8725b2ce4afa5",
        mobs: ["fire_eel_240"],
        bracket: 4
      },
      {
        name: "Flaming Worm",
        cap: 4000,
        texture: "/api/head/da91dab8391af5fda54acd2c0b18fbd819b865e1a8f1d623813fa761e924540",
        mobs: ["flaming_worm_50"],
        bracket: 3
      },
      {
        name: "Lava Blaze",
        cap: 1000,
        texture: "/api/head/b78ef2e4cf2c41a2d14bfde9caff10219f5b1bf5b35a49eb51c6467882cb5f0",
        mobs: ["lava_blaze_100"],
        bracket: 4
      },
      {
        name: "Lava Flame",
        cap: 1000,
        texture: "/api/head/b78ef2e4cf2c41a2d14bfde9caff10219f5b1bf5b35a49eb51c6467882cb5f0",
        mobs: ["lava_flame_230"],
        bracket: 4
      },
      {
        name: "Lava Leech",
        cap: 4000,
        texture: "/api/head/5a1a0831aa03afb4212adcbb24e5dfaa7f476a1173fce259ef75a85855",
        mobs: ["lava_leech_220"],
        bracket: 3
      },
      {
        name: "Lava Pigman",
        cap: 1000,
        texture: "/api/head/74e9c6e98582ffd8ff8feb3322cd1849c43fb16b158abb11ca7b42eda7743eb",
        mobs: ["lava_pigman_100"],
        bracket: 4
      },
      {
        name: "Lord Jawbus",
        cap: 250,
        texture: "/api/head/22bcaceeb4162f400d44743315932ac820d3119ac8986a0161a726161ccc93fc",
        mobs: ["lord_jawbus_600"],
        bracket: 6
      },
      {
        name: "Magma Slug",
        cap: 10000,
        texture: "/api/head/38957d5023c937c4c41aa2412d43410bda23cf79a9f6ab36b76fef2d7c429",
        mobs: ["magma_slug_200"],
        bracket: 2
      },
      {
        name: "Moogma",
        cap: 4000,
        texture: "/api/head/2b52841f2fd589e0bc84cbabf9e1c27cb70cac98f8d6b3dd065e55a4dcb70d77",
        mobs: ["moogma_210"],
        bracket: 3
      },
      {
        name: "Plhlegblast",
        cap: 7,
        texture: "/api/head/d8705624daa2956aa45956c81bab5f4fdb2c74a596051e24192039aea3a8b8",
        mobs: ["pond_squid_300"],
        bracket: 7
      },
      {
        name: "Pyroclastic Worm",
        cap: 4000,
        texture: "/api/head/38957d5023c937c4c41aa2412d43410bda23cf79a9f6ab36b76fef2d7c429",
        mobs: ["pyroclastic_worm_240"],
        bracket: 3
      },
      {
        name: "Taurus",
        cap: 1000,
        texture: "/api/head/1642a06cd75ef307c1913ba7a224fb2082d8a2c5254fd1bf006125a087a9a868",
        mobs: ["pig_rider_250"],
        bracket: 4
      },
      {
        name: "Thunder",
        cap: 400,
        texture: "/api/head/e92089618435a0ef63e95ee95a92b83073f8c33fa77dc5365199bad33b6256",
        mobs: ["thunder_400"],
        bracket: 5
      }
    ]
  },
  fishing_festival: {
    name: "Fishing Festival",
    texture: "/api/head/ea575977e6bd0c7add94e2d8fdcc2af77e36c44d6b4c67788862a94000be6399",
    mobs: [
      {
        name: "Blue Shark",
        cap: 1000,
        texture: "/api/head/381e1d06e5f0654a682a3264905b5dc4b8e7b613ab6697ac45f2e0da3bc9b4fd",
        mobs: ["blue_shark_20"],
        bracket: 4
      },
      {
        name: "Great White Shark",
        cap: 400,
        texture: "/api/head/de2e5865429dd2520bbc703e4a9f2f1abd5e1cc5d31b8a9acbf74b7a97c937aa",
        mobs: ["great_white_shark_180"],
        bracket: 5
      },
      {
        name: "Nurse Shark",
        cap: 4000,
        texture: "/api/head/2067ccefba5d811f47e3e18438556b704393aafcafccedd5d0981999286f598a",
        mobs: ["nurse_shark_6"],
        bracket: 3
      },
      {
        name: "Tiger Shark",
        cap: 1000,
        texture: "/api/head/ea575977e6bd0c7add94e2d8fdcc2af77e36c44d6b4c67788862a94000be6399",
        mobs: ["tiger_shark_50"],
        bracket: 4
      }
    ]
  },
  winter: {
    name: "Winter",
    texture: "/api/head/4dd2d3c6d01c276226c7b0d377122e1a647b2ffb5b9b54fa98eac37bb1d09d3a",
    mobs: [
      {
        name: "Frosty",
        cap: 4000,
        texture: "/api/item/PUMPKIN",
        mobs: ["frosty_the_snowman_13"],
        bracket: 3
      },
      {
        name: "Frozen Steve",
        cap: 4000,
        texture: "/api/head/54690f5aa6d0e800f9b8d1890fc158b921819a81dfd7342a2170e7efc46b9ed7",
        mobs: ["frozen_steve_7"],
        bracket: 3
      },
      {
        name: "Grinch",
        cap: 250,
        texture: "/api/head/2508e4a2f88502c019652b2437b76c82fedff9091389d88118ecc673f628b547",
        mobs: ["grinch_21"],
        bracket: 6
      },
      {
        name: "Nutcracker",
        cap: 400,
        texture: "/api/head/c2407e66c81b1443c2e7dfc4d6583eb19c622fa22f34fbf99fe6c45f76a",
        mobs: ["nutcracker_50"],
        bracket: 5
      },
      {
        name: "Reindrake",
        cap: 100,
        texture: "/api/item/DRAGON_EGG",
        mobs: ["reindrake_100"],
        bracket: 7
      },
      {
        name: "Yeti",
        cap: 250,
        texture: "/api/head/4dd2d3c6d01c276226c7b0d377122e1a647b2ffb5b9b54fa98eac37bb1d09d3a",
        mobs: ["yeti_175"],
        bracket: 6
      }
    ]
  },
  catacombs: {
    name: "Catacombs",
    texture: "/api/head/964e1c3e315c8d8fffc37985b6681c5bd16a6f97ffd07199e8a05efbef103793",
    mobs: [
      {
        name: "Angry Archaeologist",
        cap: 3000,
        texture: "/api/head/c48c783458e4cf8518e8ab5863fbc4cb948f90568eeb9a60d16c4fde2b96c033",
        mobs: ["diamond_guy_80", "diamond_guy_90", "diamond_guy_100", "diamond_guy_110", "diamond_guy_120", "diamond_guy_130", "diamond_guy_140", "diamond_guy_150", "diamond_guy_160", "diamond_guy_170", "master_diamond_guy_80", "master_diamond_guy_90", "master_diamond_guy_100", "master_diamond_guy_110", "master_diamond_guy_120", "master_diamond_guy_130", "master_diamond_guy_140", "master_diamond_guy_150", "master_diamond_guy_160", "master_diamond_guy_170"],
        bracket: 7
      },
      {
        name: "Bat",
        cap: 1000,
        texture: "/api/head/382fc3f71b41769376a9e92fe3adbaac3772b999b219c9d6b4680ba9983e527",
        mobs: ["dungeon_secret_bat_1"],
        bracket: 4
      },
      {
        name: "Cellar Spider",
        cap: 1000,
        texture: "/api/head/41645dfd77d09923107b3496e94eeb5c30329f97efc96ed76e226e98224",
        mobs: ["cellar_spider_45", "cellar_spider_65", "cellar_spider_75", "cellar_spider_85", "cellar_spider_95", "cellar_spider_105", "cellar_spider_115", "cellar_spider_125", "master_cellar_spider_45", "master_cellar_spider_65", "master_cellar_spider_75", "master_cellar_spider_85", "master_cellar_spider_95", "master_cellar_spider_105", "master_cellar_spider_115", "master_cellar_spider_125"],
        bracket: 4
      },
      {
        name: "Lonely Spider",
        cap: 25000,
        texture: "/api/head/cd541541daaff50896cd258bdbdd4cf80c3ba816735726078bfe393927e57f1",
        mobs: ["lonely_spider_35", "lonely_spider_55", "lonely_spider_65", "lonely_spider_75", "lonely_spider_85", "lonely_spider_95", "lonely_spider_105", "lonely_spider_115", "master_lonely_spider_35", "master_lonely_spider_55", "master_lonely_spider_65", "master_lonely_spider_75", "master_lonely_spider_85", "master_lonely_spider_95", "master_lonely_spider_105", "master_lonely_spider_115"],
        bracket: 4
      },
      {
        name: "Crypt Dreadlord",
        cap: 25000,
        texture: "/api/head/66f349270a3b851896cdad842f5eec6e140bd9119b75c074955c3be7865e27c7",
        mobs: ["crypt_dreadlord_47", "crypt_dreadlord_67", "crypt_dreadlord_77", "crypt_dreadlord_87", "crypt_dreadlord_97", "crypt_dreadlord_107", "crypt_dreadlord_117", "crypt_dreadlord_127", "master_crypt_dreadlord_47", "master_crypt_dreadlord_67", "master_crypt_dreadlord_77", "master_crypt_dreadlord_87", "master_crypt_dreadlord_97", "master_crypt_dreadlord_107", "master_crypt_dreadlord_117", "master_crypt_dreadlord_127"],
        bracket: 4
      },
      {
        name: "Crypt Lurker",
        cap: 25000,
        texture: "/api/head/b3666d1bdf4558b0d16990b241e8185cbf58c3e03c24d904544e8cc65b1c38d1",
        mobs: ["crypt_lurker_41", "crypt_lurker_61", "crypt_lurker_71", "crypt_lurker_81", "crypt_lurker_91", "crypt_lurker_101", "crypt_lurker_111", "crypt_lurker_121", "master_crypt_lurker_41", "master_crypt_lurker_61", "master_crypt_lurker_71", "master_crypt_lurker_81", "master_crypt_lurker_91", "master_crypt_lurker_101", "master_crypt_lurker_111", "master_crypt_lurker_121"],
        bracket: 4
      },
      {
        name: "Crypt Souleater",
        cap: 25000,
        texture: "/api/head/66f349270a3b851896cdad842f5eec6e140bd9119b75c074955c3be7865e27c7",
        mobs: ["crypt_souleater_45", "crypt_souleater_65", "crypt_souleater_75", "crypt_souleater_85", "crypt_souleater_95", "crypt_souleater_105", "crypt_souleater_115", "crypt_souleater_125", "master_crypt_souleater_45", "master_crypt_souleater_65", "master_crypt_souleater_75", "master_crypt_souleater_85", "master_crypt_souleater_95", "master_crypt_souleater_105", "master_crypt_souleater_115", "master_crypt_souleater_125"],
        bracket: 4
      },
      {
        name: "Fels",
        cap: 10000,
        texture: "/api/head/bc6a4072c72e27b03234d650b0e52815d84657536daa23d1140b4c7b7f8d1dde",
        mobs: ["tentaclees_90", "tentaclees_100", "tentaclees_110", "master_tentaclees_90", "master_tentaclees_100", "master_tentaclees_110"],
        bracket: 5
      },
      {
        name: "Golem",
        cap: 1000,
        texture: "/api/head/22bcaceeb4162f400d44743315932ac820d3119ac8986a0161a726161ccc93fc",
        mobs: ["sadan_golem_1", "master_sadan_golem_1"],
        bracket: 4
      },
      {
        name: "King Midas",
        cap: 750,
        texture: "/api/head/62bca085750043503f5df9f7def824a2e3acfc27842bcd09d2b6695881e832f5",
        mobs: ["king_midas_130", "king_midas_140", "king_midas_150", "king_midas_160", "king_midas_170", "master_king_midas_130", "master_king_midas_140", "master_king_midas_150", "master_king_midas_160", "master_king_midas_170"],
        bracket: 6
      },
      {
        name: "Lost Adventurer",
        cap: 3000,
        texture: "/api/head/1e0329f42192ee7c1a0c704f82dbbbe7c00fbfa3f020c1067a208630b991b988",
        mobs: ["lost_adventurer_80", "lost_adventurer_81", "lost_adventurer_82", "lost_adventurer_83", "lost_adventurer_85", "lost_adventurer_86", "lost_adventurer_87", "lost_adventurer_88", "lost_adventurer_90", "lost_adventurer_91", "lost_adventurer_92", "lost_adventurer_93", "lost_adventurer_100", "lost_adventurer_101", "lost_adventurer_102", "lost_adventurer_103", "lost_adventurer_110", "lost_adventurer_111", "lost_adventurer_112", "lost_adventurer_113", "lost_adventurer_120", "lost_adventurer_121", "lost_adventurer_122", "lost_adventurer_123", "lost_adventurer_130", "lost_adventurer_131", "lost_adventurer_132", "lost_adventurer_133", "lost_adventurer_134", "lost_adventurer_135", "lost_adventurer_140", "lost_adventurer_141", "lost_adventurer_142", "lost_adventurer_143", "lost_adventurer_144", "lost_adventurer_150", "lost_adventurer_151", "lost_adventurer_152", "lost_adventurer_153", "lost_adventurer_154", "lost_adventurer_160", "lost_adventurer_161", "lost_adventurer_162", "lost_adventurer_163", "lost_adventurer_164", "master_lost_adventurer_80", "master_lost_adventurer_81", "master_lost_adventurer_82", "master_lost_adventurer_83", "master_lost_adventurer_85", "master_lost_adventurer_86", "master_lost_adventurer_87", "master_lost_adventurer_88", "master_lost_adventurer_90", "master_lost_adventurer_91", "master_lost_adventurer_92", "master_lost_adventurer_93", "master_lost_adventurer_100", "master_lost_adventurer_101", "master_lost_adventurer_102", "master_lost_adventurer_103", "master_lost_adventurer_110", "master_lost_adventurer_111", "master_lost_adventurer_112", "master_lost_adventurer_113", "master_lost_adventurer_120", "master_lost_adventurer_121", "master_lost_adventurer_122", "master_lost_adventurer_123", "master_lost_adventurer_130", "master_lost_adventurer_131", "master_lost_adventurer_132", "master_lost_adventurer_133", "master_lost_adventurer_134", "master_lost_adventurer_135", "master_lost_adventurer_140", "master_lost_adventurer_141", "master_lost_adventurer_142", "master_lost_adventurer_143", "master_lost_adventurer_144", "master_lost_adventurer_150", "master_lost_adventurer_151", "master_lost_adventurer_152", "master_lost_adventurer_153", "master_lost_adventurer_154", "master_lost_adventurer_160", "master_lost_adventurer_161", "master_lost_adventurer_162", "master_lost_adventurer_163", "master_lost_adventurer_164"],
        bracket: 7
      },
      {
        name: "Mimic",
        cap: 1000,
        texture: "/api/head/e19c12543bc7792605ef68e1f8749ae8f2a381d9085d4d4b780ba1282d3597a0",
        mobs: ["mimic_115", "mimic_125", "master_mimic_115", "master_mimic_125"],
        bracket: 4
      },
      {
        name: "Scared Skeleton",
        cap: 4000,
        texture: "/api/head/88eb68a4d38e9f446b8e99275f160302f366ef10216abf948487e582512bd0f3",
        mobs: ["scared_skeleton_42", "scared_skeleton_62", "scared_skeleton_72", "master_scared_skeleton_42", "master_scared_skeleton_62", "master_scared_skeleton_72"],
        bracket: 3
      },
      {
        name: "Shadow Assassin",
        cap: 3000,
        texture: "/api/head/3399e00f404411e465d74388df132d51fe868ecf86f1c073faffa1d9172ec0f3",
        mobs: ["shadow_assassin_120", "shadow_assassin_130", "shadow_assassin_140", "shadow_assassin_150", "shadow_assassin_160", "shadow_assassin_170", "shadow_assassin_171", "master_shadow_assassin_120", "master_shadow_assassin_130", "master_shadow_assassin_140", "master_shadow_assassin_150", "master_shadow_assassin_160", "master_shadow_assassin_170", "master_shadow_assassin_171"],
        bracket: 7
      },
      {
        name: "Skeleton Grunt",
        cap: 4000,
        texture: "/api/head/70471677b37ae842c2bd232e16eeb84d5a493231eecec072da38be3127dd5c8",
        mobs: ["skeleton_grunt_40", "skeleton_grunt_60", "skeleton_grunt_70", "skeleton_grunt_80", "master_skeleton_grunt_40", "master_skeleton_grunt_60", "master_skeleton_grunt_70", "master_skeleton_grunt_80"],
        bracket: 3
      },
      {
        name: "Skeleton Lord",
        cap: 1000,
        texture: "/api/head/2d16de24cc605243df322a75dcdb90ea65fbec5e45f2f10beda5640a9e5f0626",
        mobs: ["skeleton_lord_150", "master_skeleton_lord_150"],
        bracket: 5
      },
      {
        name: "Skeleton Master",
        cap: 25000,
        texture: "/api/head/74e95e1b7dc82ba7845a68fc6a312f4cd90ee2f6cce26a68c88b04b1072d879",
        mobs: ["skeleton_master_48", "skeleton_master_68", "skeleton_master_78", "skeleton_master_88", "skeleton_master_98", "skeleton_master_108", "skeleton_master_118", "skeleton_master_128", "master_skeleton_master_48", "master_skeleton_master_68", "master_skeleton_master_78", "master_skeleton_master_88", "master_skeleton_master_98", "master_skeleton_master_108", "master_skeleton_master_118", "master_skeleton_master_128"],
        bracket: 4
      },
      {
        name: "Skeleton Soldier",
        cap: 40000,
        texture: "/api/head/219688e0c2f05aeb979d6a1b8c911957b7d3657e14b57af93c5ef6f6a59569dd",
        mobs: ["skeleton_soldier_46", "skeleton_soldier_66", "skeleton_soldier_76", "skeleton_soldier_86", "skeleton_soldier_96", "skeleton_soldier_106", "skeleton_soldier_116", "skeleton_soldier_126", "master_skeleton_soldier_46", "master_skeleton_soldier_66", "master_skeleton_soldier_76", "master_skeleton_soldier_86", "master_skeleton_soldier_96", "master_skeleton_soldier_106", "master_skeleton_soldier_116", "master_skeleton_soldier_126"],
        bracket: 1
      },
      {
        name: "Skeletor",
        cap: 10000,
        texture: "/api/head/89d074ad9b9971879eb325bddff3675f7224856bd6d569fc8d483c133d73005d",
        mobs: ["skeletor_80", "skeletor_90", "skeletor_100", "skeletor_101", "skeletor_110", "skeletor_120", "skeletor_prime_100", "skeletor_prime_110", "skeletor_prime_120", "master_skeletor_80", "master_skeletor_90", "master_skeletor_100", "master_skeletor_101", "master_skeletor_110", "master_skeletor_120", "master_skeletor_prime_100", "master_skeletor_prime_110", "master_skeletor_prime_120"],
        bracket: 5
      },
      {
        name: "Sniper",
        cap: 4000,
        texture: "/api/head/b18c071f080dba50a62a6263ff724edc157ce4fb4883cceff2491d5bbde830c1",
        mobs: ["sniper_skeleton_43", "sniper_skeleton_63", "sniper_skeleton_73", "sniper_skeleton_83", "sniper_skeleton_93", "sniper_skeleton_103", "sniper_skeleton_113", "sniper_skeleton_123", "master_sniper_skeleton_43", "master_sniper_skeleton_63", "master_sniper_skeleton_73", "master_sniper_skeleton_83", "master_sniper_skeleton_93", "master_sniper_skeleton_103", "master_sniper_skeleton_113", "master_sniper_skeleton_123"],
        bracket: 3
      },
      {
        name: "Super Archer",
        cap: 10000,
        texture: "/api/head/dcae6db0b59a64305076d966d8e7b9a97be46dae3a807714fa86d37848f6",
        mobs: ["super_archer_90", "super_archer_100", "super_archer_110", "super_archer_120", "master_super_archer_90", "master_super_archer_100", "master_super_archer_110", "master_super_archer_120"],
        bracket: 5
      },
      {
        name: "Super Tank Zombie",
        cap: 25000,
        texture: "/api/head/b3666d1bdf4558b0d16990b241e8185cbf58c3e03c24d904544e8cc65b1c38d1",
        mobs: ["super_tank_zombie_90", "super_tank_zombie_100", "super_tank_zombie_110", "super_tank_zombie_120", "master_super_tank_zombie_90", "master_super_tank_zombie_100", "master_super_tank_zombie_110", "master_super_tank_zombie_120"],
        bracket: 4
      },
      {
        name: "Tank Zombie",
        cap: 4000,
        texture: "/api/head/b3666d1bdf4558b0d16990b241e8185cbf58c3e03c24d904544e8cc65b1c38d1",
        mobs: ["crypt_tank_zombie_40", "crypt_tank_zombie_60", "crypt_tank_zombie_70", "crypt_tank_zombie_80", "crypt_tank_zombie_90", "master_crypt_tank_zombie_40", "master_crypt_tank_zombie_60", "master_crypt_tank_zombie_70", "master_crypt_tank_zombie_80", "master_crypt_tank_zombie_90"],
        bracket: 3
      },
      {
        name: "Terracotta",
        cap: 40000,
        texture: "/api/head/6570a2d2a362adeeb05e6f25edcd54cac335f22f0e4669e9c1ebd9a02573bcab",
        mobs: ["sadan_statue_1", "master_sadan_statue_1"],
        bracket: 1
      },
      {
        name: "Undead",
        cap: 10000,
        texture: "/api/head/f4624a9a8c69ca204504abb043d47456cd9b09749a36357462303f276a229d4",
        mobs: ["watcher_summon_undead_1", "watcher_summon_undead_2", "watcher_summon_undead_3", "watcher_summon_undead_4", "watcher_summon_undead_5", "watcher_summon_undead_6", "watcher_summon_undead_7", "watcher_summon_undead_8", "master_watcher_summon_undead_1", "master_watcher_summon_undead_2", "master_watcher_summon_undead_3", "master_watcher_summon_undead_4", "master_watcher_summon_undead_5", "master_watcher_summon_undead_6", "master_watcher_summon_undead_7", "master_watcher_summon_undead_8"],
        bracket: 2
      },
      {
        name: "Undead Skeleton",
        cap: 25000,
        texture: "/api/head/88eb68a4d38e9f446b8e99275f160302f366ef10216abf948487e582512bd0f3",
        mobs: ["dungeon_respawning_skeleton_40", "dungeon_respawning_skeleton_skull_40", "dungeon_respawning_skeleton_60", "dungeon_respawning_skeleton_70", "dungeon_respawning_skeleton_80", "dungeon_respawning_skeleton_90", "dungeon_respawning_skeleton_100", "dungeon_respawning_skeleton_110", "dungeon_respawning_skeleton_120", "master_dungeon_respawning_skeleton_40", "master_dungeon_respawning_skeleton_60", "master_dungeon_respawning_skeleton_70", "master_dungeon_respawning_skeleton_80", "master_dungeon_respawning_skeleton_90", "master_dungeon_respawning_skeleton_100", "master_dungeon_respawning_skeleton_110", "master_dungeon_respawning_skeleton_120"],
        bracket: 4
      },
      {
        name: "Wither Guard",
        cap: 10000,
        texture: "/api/head/f5ec964645a8efac76be2f160d7c9956362f32b6517390c59c3085034f050cff",
        mobs: ["wither_guard_100", "master_wither_guard_100"],
        bracket: 5
      },
      {
        name: "Wither Husk",
        cap: 10000,
        texture: "/api/head/f5ec964645a8efac76be2f160d7c9956362f32b6517390c59c3085034f050cff",
        mobs: ["master_wither_husk_100"],
        bracket: 5
      },
      {
        name: "Wither Miner",
        cap: 25000,
        texture: "/api/head/f5ec964645a8efac76be2f160d7c9956362f32b6517390c59c3085034f050cff",
        mobs: ["wither_miner_100", "master_wither_miner_100"],
        bracket: 4
      },
      {
        name: "Withermancer",
        cap: 25000,
        texture: "/api/head/f5ec964645a8efac76be2f160d7c9956362f32b6517390c59c3085034f050cff",
        mobs: ["crypt_witherskeleton_90", "crypt_witherskeleton_100", "crypt_witherskeleton_110", "crypt_witherskeleton_120", "master_crypt_witherskeleton_90", "master_crypt_witherskeleton_100", "master_crypt_witherskeleton_110", "master_crypt_witherskeleton_120"],
        bracket: 4
      },
      {
        name: "Zombie Commander",
        cap: 3000,
        texture: "/api/head/e3976ef4f9d68cfc0f24f6b313713a5f2abbcfff32a27c514c1392dfe619191e",
        mobs: ["zombie_commander_110", "zombie_commander_120", "master_zombie_commander_110", "master_zombie_commander_120"],
        bracket: 4
      },
      {
        name: "Zombie Grunt",
        cap: 4000,
        texture: "/api/head/e3976ef4f9d68cfc0f24f6b313713a5f2abbcfff32a27c514c1392dfe619191e",
        mobs: ["zombie_grunt_40", "zombie_grunt_60", "zombie_grunt_70", "zombie_grunt_80", "master_zombie_grunt_40", "master_zombie_grunt_60", "master_zombie_grunt_70", "master_zombie_grunt_80"],
        bracket: 3
      },
      {
        name: "Zombie Knight",
        cap: 10000,
        texture: "/api/head/25d2f31ba162fe6272e831aed17f53213db6fa1c4cbe4fc827f3963cc98b9",
        mobs: ["zombie_knight_86", "zombie_knight_96", "zombie_knight_106", "zombie_knight_116", "zombie_knight_126", "master_zombie_knight_86", "master_zombie_knight_96", "master_zombie_knight_106", "master_zombie_knight_116", "master_zombie_knight_126"],
        bracket: 5
      },
      {
        name: "Zombie Lord",
        cap: 1000,
        texture: "/api/head/e3976ef4f9d68cfc0f24f6b313713a5f2abbcfff32a27c514c1392dfe619191e",
        mobs: ["zombie_lord_150", "master_zombie_lord_150"],
        bracket: 5
      },
      {
        name: "Zombie Soldier",
        cap: 40000,
        texture: "/api/head/e3976ef4f9d68cfc0f24f6b313713a5f2abbcfff32a27c514c1392dfe619191e",
        mobs: ["zombie_soldier_83", "zombie_soldier_93", "zombie_soldier_103", "zombie_soldier_113", "zombie_soldier_123", "master_zombie_soldier_83", "master_zombie_soldier_93", "master_zombie_soldier_103", "master_zombie_soldier_113", "master_zombie_soldier_123"],
        bracket: 1
      }
    ]
  },
  garden: {
    name: "Garden",
    texture: "/api/head/f4880d2c1e7b86e87522e20882656f45bafd42f94932b2c5e0d6ecaa490cb4c",
    mobs: [
      {
        name: "Beetle",
        cap: 250,
        texture: "/api/head/35590d5326a65d55b2bc60c5cd194c13d6125658d3d4c60ece1d9becfacea93c",
        mobs: ["pest_beetle_1"],
        bracket: 6
      },
      {
        name: "Cricket",
        cap: 250,
        texture: "/api/head/7b50d6e6bf907fa4e3c44f465cd2c4f79124b5703a2df22fac6376b1b91703cf",
        mobs: ["pest_cricket_1"],
        bracket: 6
      },
      {
        name: "Earthworm",
        cap: 250,
        texture: "/api/head/6403ba4027a333d8d2fd32ab59d1cfdbaa7d908d80d2381db2a69cbe65450ad8",
        mobs: ["pest_worm_1"],
        bracket: 6
      },
      {
        name: "Fly",
        cap: 250,
        texture: "/api/head/9d90e777826a52461368e26d1b2e19bfa1ba582d602483e545f4124d0f731842",
        mobs: ["pest_fly_1"],
        bracket: 6
      },
      {
        name: "Locust",
        cap: 250,
        texture: "/api/head/4b24a482a32db1ea78fb98060b0c2fa4a373cbd18a68edddeb7419455a59cda9",
        mobs: ["pest_locust_1"],
        bracket: 6
      },
      {
        name: "Mite",
        cap: 250,
        texture: "/api/head/be6baf6431a9daa2ca604d5a3c26e9a761d5952f0817174a4fe0b764616e21ff",
        mobs: ["pest_mite_1"],
        bracket: 6
      },
      {
        name: "Mosquito",
        cap: 250,
        texture: "/api/head/52a9fe05bc663efcd12e56a3ccc5ec035bf577b78708548b6f4ffcf1d30eccfe",
        mobs: ["pest_mosquito_1"],
        bracket: 6
      },
      {
        name: "Moth",
        cap: 250,
        texture: "/api/head/65485c4b34e5b5470be94de100e61f7816f81bc5a11dfdf0eccf890172da5d0a",
        mobs: ["pest_moth_1"],
        bracket: 6
      },
      {
        name: "Rat",
        cap: 250,
        texture: "/api/head/a8abb471db0ab78703011979dc8b40798a941f3a4dec3ec61cbeec2af8cffe8",
        mobs: ["pest_rat_1"],
        bracket: 6
      },
      {
        name: "Slug",
        cap: 250,
        texture: "/api/head/7a79d0fd677b54530961117ef84adc206e2cc5045c1344d61d776bf8ac2fe1ba",
        mobs: ["pest_slug_1"],
        bracket: 6
      }
    ]
  }
};
