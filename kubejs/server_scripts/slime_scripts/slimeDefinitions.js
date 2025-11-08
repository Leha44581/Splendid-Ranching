ServerEvents.highPriorityData(e => {

    function genSlimes(data, disabled) {
        let slimeList = []
        for (const slimeData of data) {
            if (disabled.includes(slimeData.breed)) {
                // overwrite slime data, disabling
                e.addJson(`splendid_slimes:slimes/${slimeData.breed}.json`,
                    { "conditions": [{ "type": "forge:false" }] }
                )
            } else {
                // create new slime/overwrite existing
                e.addJson(`splendid_slimes:slimes/${slimeData.breed}.json`, slimeData)
            }
            slimeList.push(slimeData.breed)
        }
        console.log(`Generated slimes: ${slimeList.join(", ")}`)
    }

    const baseDisabledSlimes = ["webby"]

    // array of all slime definitions
    const slimeDefinitionsData = [
        {
            breed: "abyssal",
            name: "Abyssal",
            color: "#003249",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "replace me",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "all_seeing",
            name: "slime.splendid_slimes.all_seeing",
            color: "#65062b",
            particle: {
                item: "minecraft:cobweb"
            },
            diet: "diet.splendid_slimes.all_seeing",
            foods: [
                {
                    tag: "forge:vegetables"
                }
            ],
            favorite_food: {
                item: "minecraft:golden_carrot"
            },
            negative_emit_effects: [
                {
                    effect: "minecraft:poison",
                    duration: 120,
                    amplifier: 0
                }
            ],
            positive_emit_effects: [
                {
                    effect: "minecraft:night_vision",
                    duration: 300,
                    amplifier: 0
                }
            ]
        },
        {
            breed: "bitwise",
            name: "slime.splendid_slimes.bitwise",
            color: "#aa0f01",
            particle: {
                item: "minecraft:redstone_block"
            },
            diet: "diet.splendid_slimes.bitwise",
            foods: [
                {
                    tag: "minecraft:logs"
                }
            ],
            favorite_food: {
                item: "minecraft:mangrove_log"
            }
        },
        {
            breed: "blazing",
            name: "slime.splendid_slimes.blazing",
            particle: {
                item: "minecraft:blaze_powder"
            },
            color: "#c96c03",
            diet: "diet.splendid_slimes.blazing",
            foods: [
                {
                    tag: "forge:cooked_meat"
                }
            ],
            favorite_food: {
                item: "minecraft:cooked_porkchop"
            },
            traits: [
                "flaming"
            ]
        },
        {
            breed: "bony",
            name: "slime.splendid_slimes.bony",
            color: "#e8e5d2",
            particle: {
                item: "minecraft:bone"
            },
            diet: "diet.splendid_slimes.bony",
            foods: [
                {
                    item: "minecraft:milk_bucket"
                },
                {
                    tag: "forge:raw_meat"
                },
                {
                    tag: "forge:cooked_meat"
                },
                {
                    tag: "splendid_slimes:animal_spawn_eggs"
                }
            ],
            favorite_food: {
                item: "minecraft:milk_bucket"
            },
            entities: [
                "minecraft:chicken",
                "minecraft:cow",
                "minecraft:pig",
                "minecraft:rabbit",
                "minecraft:sheep"
            ],
            favorite_entity: "minecraft:sheep"
        },
        {
            breed: "boomcat",
            name: "slime.splendid_slimes.boomcat",
            color: "#8a8a8a",
            particle: {
                item: "minecraft:gunpowder"
            },
            diet: "diet.splendid_slimes.boomcat",
            foods: [
                {
                    tag: "forge:raw_meat"
                },
                {
                    tag: "forge:cooked_meat"
                },
                {
                    tag: "splendid_slimes:animal_spawn_eggs"
                }
            ],
            favorite_food: {
                item: "minecraft:cooked_beef"
            },
            entities: [
                "minecraft:chicken",
                "minecraft:cow",
                "minecraft:pig",
                "minecraft:rabbit",
                "minecraft:sheep"
            ],
            favorite_entity: "minecraft:cow",
            traits: [
                "explosive"
            ]
        },
        {
            breed: "burger",
            name: "Burger",
            color: "#723a1e",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "replace me",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "candy",
            name: "Candy",
            color: "#c094e3",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "replace me",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "crimson",
            name: "Crimson",
            color: "#980000",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "replace me",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "crystal",
            name: "Crystal",
            color: "#769ece",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "replace me",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "dusty",
            name: "Dusty",
            color: "#575122",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "replace me",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "ender",
            name: "slime.splendid_slimes.ender",
            color: "#0b4d42",
            particle: {
                item: "minecraft:ender_pearl"
            },
            diet: "diet.splendid_slimes.ender",
            foods: [
                {
                    tag: "forge:gems"
                }
            ],
            favorite_food: {
                item: "minecraft:amethyst_shard"
            },
            traits: [
                "foodporting"
            ],
            negative_commands: [
                "tp @e[distance=..8] @e[limit=1,sort=nearest]",
                "playsound minecraft:entity.enderman.teleport block @a[distance=..10]"
            ]
        },
        {
            breed: "fire",
            name: "Fire",
            color: "#ff5013",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "replace me",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "forsaken",
            name: "Forsaken",
            color: "#463e29",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "replace me",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "fungus",
            name: "Fungus",
            color: "#ff4e4e",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "replace me",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "gold",
            name: "slime.splendid_slimes.gold",
            color: "#e9b115",
            particle: {
                item: "minecraft:raw_gold_block"
            },
            hat_y_offset: -1,
            diet: "diet.splendid_slimes.gold",
            foods: [
                {
                    tag: "forge:ingots"
                }
            ],
            favorite_food: {
                item: "minecraft:copper_ingot"
            },
            traits: [
                "moody",
                "picky"
            ]
        },
        {
            breed: "jurassic",
            name: "Jurassic",
            color: "#d25d27",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "replace me",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "luminous",
            name: "slime.splendid_slimes.luminous",
            color: "#ffbc5e",
            particle: {
                item: "minecraft:glowstone"
            },
            diet: "diet.splendid_slimes.luminous",
            foods: [
                {
                    item: "minecraft:quartz_block"
                },
                {
                    item: "minecraft:nether_quartz_ore"
                },
                {
                    item: "minecraft:quartz"
                },
                {
                    item: "minecraft:smooth_quartz"
                }
            ],
            favorite_food: {
                item: "minecraft:quartz_block"
            },
            negative_emit_effects: [
                {
                    effect: "minecraft:glowing",
                    duration: 220,
                    amplifier: 0
                }
            ]
        },
        {
            breed: "lush",
            name: "Lush",
            color: "#16852b",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "replace me",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "magma",
            name: "Magma",
            color: "#7a2214",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "replace me",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "magnetic",
            name: "Magnetic",
            color: "#2b3650",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "replace me",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "metallic",
            name: "Metallic",
            color: "#bebfd2",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "replace me",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "minty",
            name: "slime.splendid_slimes.minty",
            color: "#cd75a4",
            particle: {
                item: "minecraft:dragon_egg"
            },
            hat_y_offset: -0.7,
            diet: "diet.splendid_slimes.minty",
            foods: [
                {
                    tag: "splendid_slimes:monster_spawn_eggs"
                }
            ],
            entities: [
                "minecraft:zombie",
                "minecraft:zombie_villager",
                "minecraft:skeleton",
                "minecraft:enderman",
                "minecraft:husk",
                "minecraft:stray",
                "minecraft:drowned",
                "minecraft:creeper",
                "minecraft:wither",
                "minecraft:warden",
                "minecraft:spider",
                "minecraft:cave_spider"
            ],
            favorite_entity: "minecraft:enderman",
            traits: [
                "feral",
                "defiant",
                "floating",
                "putrid"
            ],
            innate_effects: [
                {
                    effect: "minecraft:strength",
                    amplifier: 2
                },
                {
                    effect: "minecraft:slow_falling",
                    amplifier: 0
                }
            ],
            positive_emit_effects: [
                {
                    effect: "minecraft:regeneration",
                    duration: 40,
                    amplifier: 0
                }
            ]
        },
        {
            breed: "monster",
            name: "Monster",
            color: "#509e55",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "replace me",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "nuclear",
            name: "Nuclear",
            color: "#00ff08",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "replace me",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "ocean",
            name: "Ocean",
            color: "#304398",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "replace me",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "orby",
            name: "slime.splendid_slimes.orby",
            color: "#b8e45a",
            particle: {
                item: "minecraft:experience_bottle"
            },
            hat_y_offset: -0.5,
            diet: "diet.splendid_slimes.orby",
            foods: [
                {
                    tag: "splendid_slimes:animal_spawn_eggs"
                },
                {
                    tag: "splendid_slimes:monster_spawn_eggs"
                }
            ],
            traits: [
                "defiant",
                "handy",
                "inverse"
            ],
            entities: [
                "minecraft:chicken",
                "minecraft:cow",
                "minecraft:pig",
                "minecraft:rabbit",
                "minecraft:sheep",
                "minecraft:zombie",
                "minecraft:zombie_villager",
                "minecraft:skeleton",
                "minecraft:enderman",
                "minecraft:husk",
                "minecraft:stray",
                "minecraft:drowned",
                "minecraft:creeper",
                "minecraft:warden",
                "minecraft:wither",
                "minecraft:spider",
                "minecraft:cave_spider"
            ],
            favorite_entity: "minecraft:skeleton",
            innate_effects: [
                {
                    effect: "minecraft:strength",
                    amplifier: 0
                }
            ]
        },
        {
            breed: "phantom",
            name: "slime.splendid_slimes.phantom",
            color: "#dcd9c0",
            particle: {
                item: "minecraft:lapis_block"
            },
            hat_z_offset: -0.06,
            diet: "diet.splendid_slimes.phantom",
            foods: [
                {
                    tag: "minecraft:beds"
                }
            ],
            favorite_food: {
                item: "minecraft:purple_bed"
            },
            traits: [
                "floating"
            ],
            innate_effects: [
                {
                    effect: "minecraft:slow_falling",
                    amplifier: 0
                }
            ]
        },
        {
            breed: "prisma",
            name: "slime.splendid_slimes.prisma",
            color: "#a4d1c2",
            particle: {
                item: "minecraft:prismarine_shard"
            },
            diet: "diet.splendid_slimes.prisma",
            foods: [
                {
                    tag: "minecraft:fishes"
                }
            ],
            favorite_food: {
                item: "minecraft:tropical_fish"
            },
            entities: [
                "minecraft:cod",
                "minecraft:salmon",
                "minecraft:pufferfish",
                "minecraft:tropical_fish"
            ],
            favorite_entity: "minecraft:tropical_fish",
            traits: [
                "aquatic",
                "spiky"
            ],
            innate_effects: [
                {
                    effect: "minecraft:water_breathing",
                    amplifier: 0
                }
            ],
            emit_effect_particle: "minecraft:splash",
            negative_emit_effects: [
                {
                    effect: "minecraft:mining_fatigue",
                    duration: 120,
                    amplifier: 0
                }
            ],
            positive_emit_effects: [
                {
                    effect: "minecraft:dolphins_grace",
                    duration: 600,
                    amplifier: 0
                },
                {
                    effect: "minecraft:conduit_power",
                    duration: 600,
                    amplifier: 0
                }
            ]
        },
        {
            breed: "puddle",
            name: "slime.splendid_slimes.puddle",
            color: "#68c9ff",
            particle: {
                item: "minecraft:prismarine_shard"
            },
            diet: "diet.splendid_slimes.puddle",
            foods: [
                {
                    tag: "minecraft:fishes"
                }
            ],
            favorite_food: {
                item: "minecraft:tropical_fish"
            },
            entities: [
                "minecraft:cod",
                "minecraft:salmon",
                "minecraft:pufferfish",
                "minecraft:tropical_fish"
            ],
            favorite_entity: "minecraft:tropical_fish",
            traits: [
                "aquatic",
                "spiky"
            ],
            innate_effects: [
                {
                    effect: "minecraft:water_breathing",
                    amplifier: 0
                }
            ],
            emit_effect_particle: "minecraft:splash",
            positive_emit_effects: [
                {
                    effect: "minecraft:water_breathing",
                    duration: 600,
                    amplifier: 0
                }
            ]
        },
        {
            breed: "quantum",
            name: "Quantum",
            color: "#423364",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "replace me",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "rad",
            name: "Rad",
            color: "#6cbe3d",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "replace me",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "rock",
            name: "Rocky",
            color: "#4b4b4b",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "replace me",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "rotting",
            name: "slime.splendid_slimes.rotting",
            color: "#6f4d1b",
            particle: {
                item: "minecraft:rotten_flesh"
            },
            diet: "diet.splendid_slimes.rotting",
            foods: [
                {
                    tag: "forge:raw_meat"
                },
                {
                    tag: "splendid_slimes:animal_spawn_eggs"
                }
            ],
            favorite_food: {
                item: "minecraft:chicken"
            },
            entities: [
                "minecraft:chicken",
                "minecraft:cow",
                "minecraft:pig",
                "minecraft:rabbit",
                "minecraft:sheep"
            ],
            traits: [
                "putrid"
            ],
            favorite_entity: "minecraft:chicken",
            hostile_to_entities: [
                "minecraft:villager"
            ],
            negative_emit_effects: [
                {
                    effect: "minecraft:hunger",
                    duration: 220,
                    amplifier: 0
                }
            ],
            attack_commands: [
                "summon zombie ~ ~ ~ {DeathLootTable:\"minecraft:empty\",Health:8f,ArmorItems:[{},{},{},{id:\"minecraft:slime_block\",Count:1b}],ArmorDropChances:[0.085F,0.085F,0.085F,0.000F],Attributes:[{Name:generic.max_health,Base:8}]}"
            ]
        },
        {
            breed: "sandy",
            name: "Sandy",
            color: "#fffa85",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "replace me",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "shulking",
            name: "slime.splendid_slimes.shulking",
            color: "#976997",
            particle: {
                item: "minecraft:purpur_block"
            },
            hat_y_offset: -1,
            diet: "diet.splendid_slimes.shulking",
            foods: [
                {
                    item: "minecraft:popped_chorus_fruit"
                },
                {
                    item: "minecraft:chorus_flower"
                },
                {
                    item: "minecraft:chorus_plant"
                },
                {
                    item: "minecraft:chorus_fruit"
                }
            ],
            favorite_food: {
                item: "minecraft:chorus_flower"
            },
            traits: [
                "foodporting"
            ],
            emit_effect_particle: "minecraft:end_rod",
            negative_emit_effects: [
                {
                    effect: "minecraft:levitation",
                    duration: 120,
                    amplifier: 0
                }
            ]
        },
        {
            breed: "slimy",
            name: "slime.splendid_slimes.slimy",
            color: "#ff7d9d",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "diet.splendid_slimes.slimy",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "sweet",
            name: "slime.splendid_slimes.sweet",
            color: "#eaeaea",
            hat_scale: 1,
            hat_y_offset: -0.5,
            diet: "diet.splendid_slimes.sweet",
            foods: [
                {
                    tag: "forge:fruits"
                }
            ],
            favorite_food: {
                item: "minecraft:glow_berries"
            },
            traits: [
                "moody"
            ],
            innate_effects: [
                {
                    effect: "minecraft:speed",
                    amplifier: 2
                }
            ],
            positive_emit_effects: [
                {
                    effect: "minecraft:speed",
                    duration: 200,
                    amplifier: 3
                }
            ]
        },
        {
            breed: "tabby",
            name: "Tabby",
            color: "#a39c98",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "replace me",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "warped",
            name: "Warped",
            color: "#05b9ad",
            particle: {
                item: "minecraft:pink_concrete"
            },
            hat_y_offset: -0.55,
            diet: "replace me",
            foods: [
                {
                    tag: "minecraft:flowers"
                }
            ],
            favorite_food: {
                item: "minecraft:blue_orchid"
            }
        },
        {
            breed: "webby",
            name: "slime.splendid_slimes.webby",
            color: "#bebfd2",
            particle: {
                item: "minecraft:cobweb"
            },
            diet: "diet.splendid_slimes.webby",
            foods: [{}],
            favorite_food: {},
            negative_emit_effects: []
        },
        {
            breed: "weeping",
            name: "slime.splendid_slimes.weeping",
            particle: {
                item: "minecraft:ghast_tear"
            },
            color: "#cff1f1",
            diet: "diet.splendid_slimes.weeping",
            foods: [
                {
                    tag: "forge:fruits"
                }
            ],
            traits: [
                "weeping"
            ],
            favorite_food: {
                item: "minecraft:glow_berries"
            }
        }
    ]
    genSlimes(slimeDefinitionsData, baseDisabledSlimes)
})