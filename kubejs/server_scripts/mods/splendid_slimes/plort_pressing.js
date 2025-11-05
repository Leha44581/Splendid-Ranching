ServerEvents.recipes(e => {
    e.remove({ type: 'splendid_slimes:plort_pressing' })
    e.custom({
        type: "splendid_slimes:plort_pressing",
        ingredient: {
            item: "splendid_slimes:slime_heart",
            nbt: {
                slime: {
                    id: "splendid_slimes:luminous"
                }
            }
        },
        output: {
            item: "splendid_slimes:slime_heart",
            nbt: {
                slime: {
                    id: "splendid_slimes:webby"
                }
            }
        },
        result: {
            item: "splendid_slimes:slime_heart",
            nbt: {
                slime: {
                    id: "splendid_slimes:all_seeing"
                }
            }
        }
    }).id('kubejs:splendid_slimes/plort_pressing/luminous_to_all_seeing')

    let placeholder = {
        type: "splendid_slimes:plort_pressing",
        ingredient: {
            item: "splendid_slimes:slime_heart",
            nbt: {
                slime: {
                    id: "splendid_slimes:luminous"
                }
            }
        },
        output: {
            item: "splendid_slimes:slime_heart",
            nbt: {
                slime: {
                    id: "splendid_slimes:webby"
                }
            }
        },
        result: {
            item: "splendid_slimes:slime_heart",
            nbt: {
                slime: {
                    id: "splendid_slimes:all_seeing"
                }
            }
        }
    }

})