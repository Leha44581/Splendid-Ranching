// priority: 1000

// object for storing slimes data
global.baseSlimeValueData = {
    // naturally spawning
    slimy: {
        baseValue: 10,
        currentValue: 10,
        priceRange: [5, 15], // min and max price (CURRENTLY DISABLED AND DOES NOTHING, READ MARKET FLUCTUATION SCRIPT)
        /* The current market volume of the plort to scale off.
        Every sold plort increases this value by 1, and the price is scaled off this value
        up to the max volume, at which point the price is halv*ed.
        each day the current volume is reduced by 25% of its previous value */
        currentVolume: 10, // initial volume on day 0 before any daily adjustments
        maxVolume: 200,
        slimeDupeCost: 8
    },
    // t0
    puddle: {
        baseValue: 10,
        currentValue: 10,
        priceRange: [5, 15],
        currentVolume: 10,
        maxVolume: 220,
        slimeDupeCost: 8
    },
    rocky: {
        baseValue: 10,
        currentValue: 10,
        priceRange: [5, 15],
        currentVolume: 10,
        maxVolume: 220,
        slimeDupeCost: 8
    },
    monster: {
        baseValue: 10,
        currentValue: 10,
        priceRange: [5, 15],
        currentVolume: 10,
        maxVolume: 220,
        slimeDupeCost: 8
    },
    orby: {
        baseValue: 10,
        currentValue: 10,
        priceRange: [5, 15],
        currentVolume: 10,
        maxVolume: 180,
        slimeDupeCost: 8
    },
    tabby: {
        baseValue: 10,
        currentValue: 10,
        priceRange: [5, 15],
        currentVolume: 10,
        maxVolume: 220,
        slimeDupeCost: 8
    },
    sweet: {
        baseValue: 10,
        currentValue: 10,
        priceRange: [5, 15],
        currentVolume: 10,
        maxVolume: 220,
        slimeDupeCost: 8
    },
    lush: {
        baseValue: 10,
        currentValue: 10,
        priceRange: [5, 15],
        currentVolume: 10,
        maxVolume: 160,
        slimeDupeCost: 8
    },
    dusty: {
        baseValue: 10,
        currentValue: 10,
        priceRange: [5, 15],
        currentVolume: 10,
        maxVolume: 220,
        slimeDupeCost: 8
    },
    crystal: {
        baseValue: 10,
        currentValue: 10,
        priceRange: [5, 15],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 8
    },
    sandy: {
        baseValue: 10,
        currentValue: 10,
        priceRange: [5, 15],
        currentVolume: 10,
        maxVolume: 200,
        slimeDupeCost: 8
    },
    fire: {
        baseValue: 10,
        currentValue: 10,
        priceRange: [5, 15],
        currentVolume: 10,
        maxVolume: 180,
        slimeDupeCost: 8
    },
    alien: {
        baseValue: 10,
        currentValue: 10,
        priceRange: [5, 15],
        currentVolume: 10,
        maxVolume: 180,
        slimeDupeCost: 8
    },
    // alex
    abyssal: {
        baseValue: 10,
        currentValue: 10,
        priceRange: [5, 15],
        currentVolume: 12,
        maxVolume: 280,
        slimeDupeCost: 16
    },
    candy: {
        baseValue: 10,
        currentValue: 10,
        priceRange: [5, 15],
        currentVolume: 12,
        maxVolume: 240,
        slimeDupeCost: 16
    },
    rad: {
        baseValue: 10,
        currentValue: 10,
        priceRange: [5, 15],
        currentVolume: 12,
        maxVolume: 200,
        slimeDupeCost: 16
    },
    forlorn: {
        baseValue: 10,
        currentValue: 10,
        priceRange: [5, 15],
        currentVolume: 12,
        maxVolume: 240,
        slimeDupeCost: 16
    },
    jurassic: {
        baseValue: 10,
        currentValue: 10,
        priceRange: [5, 15],
        currentVolume: 10,
        maxVolume: 240,
        slimeDupeCost: 16
    },
    neodymium: {
        baseValue: 10,
        currentValue: 10,
        priceRange: [5, 15],
        currentVolume: 10,
        maxVolume: 240,
        slimeDupeCost: 16
    },
    //t1
    bony: {
        baseValue: 15,
        currentValue: 15,
        priceRange: [8, 22],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 16
    },
    rotting: {
        baseValue: 15,
        currentValue: 15,
        priceRange: [8, 22],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 16
    },
    all_seeing: {
        baseValue: 15,
        currentValue: 15,
        priceRange: [8, 22],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 16
    },
    blazing: {
        baseValue: 15,
        currentValue: 15,
        priceRange: [8, 22],
        currentVolume: 10,
        maxVolume: 220,
        slimeDupeCost: 16
    },
    prisma: {
        baseValue: 15,
        currentValue: 15,
        priceRange: [8, 22],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 16
    },
    bitwise: {
        baseValue: 15,
        currentValue: 15,
        priceRange: [8, 22],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 16
    },
    boomcat: {
        baseValue: 15,
        currentValue: 15,
        priceRange: [8, 22],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 16
    },
    fungus: {
        baseValue: 15,
        currentValue: 15,
        priceRange: [8, 22],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 16
    },
    ocean: {
        baseValue: 15,
        currentValue: 15,
        priceRange: [8, 22],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 16
    },
    stony: {
        baseValue: 15,
        currentValue: 15,
        priceRange: [8, 22],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 16
    },
    tree: {
        baseValue: 15,
        currentValue: 15,
        priceRange: [8, 22],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 16
    },
    phantom: {
        baseValue: 15,
        currentValue: 15,
        priceRange: [8, 22],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 16
    },
    //t2
    ender: {
        baseValue: 20,
        currentValue: 20,
        priceRange: [10, 30],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 32
    },
    luminous: {
        baseValue: 20,
        currentValue: 20,
        priceRange: [10, 30],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 32
    },
    magma: {
        baseValue: 20,
        currentValue: 20,
        priceRange: [10, 30],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 32
    },
    charred: {
        baseValue: 20,
        currentValue: 20,
        priceRange: [10, 30],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 32
    },
    weeping: {
        baseValue: 20,
        currentValue: 20,
        priceRange: [10, 30],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 32
    },
    crimson: {
        baseValue: 20,
        currentValue: 20,
        priceRange: [10, 30],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 32
    },
    warped: {
        baseValue: 20,
        currentValue: 20,
        priceRange: [10, 30],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 32
    },
    geode: {
        baseValue: 20,
        currentValue: 20,
        priceRange: [10, 30],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 32
    },
    gem: {
        baseValue: 20,
        currentValue: 20,
        priceRange: [10, 30],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 32
    },
    dark: {
        baseValue: 20,
        currentValue: 20,
        priceRange: [10, 30],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 32
    },
    sculk: {
        baseValue: 20,
        currentValue: 20,
        priceRange: [10, 30],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 32
    },
    magnetic: {
        baseValue: 20,
        currentValue: 20,
        priceRange: [10, 30],
        currentVolume: 10,
        maxVolume: 250,
        slimeDupeCost: 32
    },
    //t3
    shulking: {
        baseValue: 30,
        currentValue: 40,
        priceRange: [20, 50],
        currentVolume: 10,
        maxVolume: 150,
        slimeDupeCost: 48
    },
    metallic: {
        baseValue: 30,
        currentValue: 40,
        priceRange: [20, 50],
        currentVolume: 10,
        maxVolume: 150,
        slimeDupeCost: 48
    },
    minty: {
        baseValue: 30,
        currentValue: 40,
        priceRange: [20, 50],
        currentVolume: 10,
        maxVolume: 150,
        slimeDupeCost: 48
    },
    jewel: {
        baseValue: 30,
        currentValue: 40,
        priceRange: [20, 50],
        currentVolume: 10,
        maxVolume: 150,
        slimeDupeCost: 48
    },
    infernal: {
        baseValue: 30,
        currentValue: 40,
        priceRange: [20, 50],
        currentVolume: 10,
        maxVolume: 150,
        slimeDupeCost: 48
    },
    mechanical: {
        baseValue: 30,
        currentValue: 40,
        priceRange: [20, 50],
        currentVolume: 10,
        maxVolume: 150,
        slimeDupeCost: 48
    },
    tendril: {
        baseValue: 30,
        currentValue: 40,
        priceRange: [20, 50],
        currentVolume: 10,
        maxVolume: 150,
        slimeDupeCost: 48
    },
    radiant: {
        baseValue: 30,
        currentValue: 40,
        priceRange: [20, 50],
        currentVolume: 10,
        maxVolume: 150,
        slimeDupeCost: 48
    },
    //t4
    gold: {
        baseValue: 40,
        currentValue: 50,
        priceRange: [25, 70],
        currentVolume: 10,
        maxVolume: 100,
        slimeDupeCost: 64
    },
    forge: {
        baseValue: 40,
        currentValue: 50,
        priceRange: [25, 70],
        currentVolume: 10,
        maxVolume: 100,
        slimeDupeCost: 64
    },
    time: {
        baseValue: 40,
        currentValue: 50,
        priceRange: [25, 70],
        currentVolume: 10,
        maxVolume: 100,
        slimeDupeCost: 64
    },
    quantum: {
        baseValue: 60,
        currentValue: 75,
        priceRange: [40, 90],
        currentVolume: 10,
        maxVolume: 30,
        slimeDupeCost: 0
    },
    nuclear: {
        baseValue: 60,
        currentValue: 75,
        priceRange: [40, 90],
        currentVolume: 10,
        maxVolume: 30,
        slimeDupeCost: 0
    },
    burger: {
        baseValue: 50,
        currentValue: 50,
        priceRange: [10, 150],
        currentVolume: 1,
        maxVolume: 2147000000,
        slimeDupeCost: 0
    },

}

