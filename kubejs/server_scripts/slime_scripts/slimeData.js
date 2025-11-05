// priority: 1000

// object for storing slimes data
global.baseSlimeData = {
    // naturally spawning
    slimy: {
        baseValue: 1, // base value of a slimes plort
        currentMultiplier: 1, // multiplier for a slimes plort, changes daily based on sales of plorts
        minMultiplier: 0.5, // the lowest the multiplier can go for this slimes plort market adjustments
        maxMultiplier: 2, // the highest the multiplier can go for this slimes plort from market adjustments
        slimeDupeCost: 8, // how many plorts it costs to create this slimes heart in the plort press
        spawning: { // spawning data for this slime, used with EntityJS (NYI)
            biome: "#minecraft:is_overworld", // biome to spawn in
            weight: 10, // weight for spawning
            min: 3, // minimum amount of slimes to spawn per pack
            max: 5 // maximum amount of slimes to spawn per pack
        }
    },

    // tier 1 breed

    // tier 2 breed

    // tier 3 breed

    // tier 4 breed

    // special

    // uncategorized
    all_seeing: {
        baseValue: 50,
        currentMultiplier: 1,
        minMultiplier: 0.5,
        maxMultiplier: 2,
        slimeDupeCost: 32
    },
    bitwise: {
        baseValue: 51,
        currentMultiplier: 1,
        minMultiplier: 0.5,
        maxMultiplier: 2,
        slimeDupeCost: 32
    },
    blazing: {
        baseValue: 52,
        currentMultiplier: 1,
        minMultiplier: 0.5,
        maxMultiplier: 2,
        slimeDupeCost: 32
    },
    bony: {
        baseValue: 53,
        currentMultiplier: 1,
        minMultiplier: 0.5,
        maxMultiplier: 2,
        slimeDupeCost: 32
    },
    boomcat: {
        baseValue: 54,
        currentMultiplier: 1,
        minMultiplier: 0.5,
        maxMultiplier: 2,
        slimeDupeCost: 32
    },
    ender: {
        baseValue: 55,
        currentMultiplier: 1,
        minMultiplier: 0.5,
        maxMultiplier: 2,
        slimeDupeCost: 32
    },
    gold: {
        baseValue: 56,
        currentMultiplier: 1,
        minMultiplier: 0.5,
        maxMultiplier: 2,
        slimeDupeCost: 32
    },
    luminous: {
        baseValue: 57,
        currentMultiplier: 1,
        minMultiplier: 0.5,
        maxMultiplier: 2,
        slimeDupeCost: 32
    },
    minty: {
        baseValue: 58,
        currentMultiplier: 1,
        minMultiplier: 0.5,
        maxMultiplier: 2,
        slimeDupeCost: 32
    },
    orby: {
        baseValue: 59,
        currentMultiplier: 1,
        minMultiplier: 0.5,
        maxMultiplier: 2,
        slimeDupeCost: 32
    },
    phantom: {
        baseValue: 60,
        currentMultiplier: 1,
        minMultiplier: 0.5,
        maxMultiplier: 2,
        slimeDupeCost: 32
    },
    prisma: {
        baseValue: 61,
        currentMultiplier: 1,
        minMultiplier: 0.5,
        maxMultiplier: 2,
        slimeDupeCost: 32
    },
    puddle: {
        baseValue: 62,
        currentMultiplier: 1,
        minMultiplier: 0.5,
        maxMultiplier: 2,
        slimeDupeCost: 32
    },
    rotting: {
        baseValue: 63,
        currentMultiplier: 1,
        minMultiplier: 0.5,
        maxMultiplier: 2,
        slimeDupeCost: 32
    },
    shulking: {
        baseValue: 64,
        currentMultiplier: 1,
        minMultiplier: 0.5,
        maxMultiplier: 2,
        slimeDupeCost: 32
    },
    sweet: {
        baseValue: 66,
        currentMultiplier: 1,
        minMultiplier: 0.5,
        maxMultiplier: 2,
        slimeDupeCost: 32
    },
    webby: {
        baseValue: 67,
        currentMultiplier: 1,
        minMultiplier: 0.5,
        maxMultiplier: 2,
        slimeDupeCost: 32
    },
    weeping: {
        baseValue: 68,
        currentMultiplier: 1,
        minMultiplier: 0.5,
        maxMultiplier: 2
    }
}

