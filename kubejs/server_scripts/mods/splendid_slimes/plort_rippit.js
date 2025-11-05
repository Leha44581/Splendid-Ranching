ServerEvents.recipes(e => {
    e.remove({ type: 'splendid_slimes:plort_ripping' })
    e.custom({
        type: "splendid_slimes:plort_ripping",
        ingredient: {
            item: "splendid_slimes:plort",
            nbt: {
                plort: {
                    id: "splendid_slimes:sweet"
                }
            }
        },
        results: [
            {
                item: "minecraft:sugar",
                count: 4,
                weight: 99
            },
            {
                item: "splendid_slimes:slime_candy",
                count: 1,
                weight: 1
            }
        ]
    })

    let placeholder = {
        type: "splendid_slimes:plort_ripping",
        ingredient: {
            item: "splendid_slimes:plort",
            nbt: {
                plort: {
                    id: "splendid_slimes:sweet"
                }
            }
        },
        results: [
            {
                item: "minecraft:sugar",
                count: 4,
                weight: 99
            },
            {
                item: "splendid_slimes:slime_candy",
                count: 1,
                weight: 1
            }
        ]
    }
})