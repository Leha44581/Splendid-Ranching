ServerEvents.tags('item', e => {
    // causes ftb to check nbt on these items in quests without setting per quest
    e.add('itemfilters:check_nbt', [
        'splendid_slimes:plort', 'splendid_slimes:slime_heart', 'splendid_slimes:slime_item'
    ])
})

ServerEvents.tags('block', e => {
    e.add('minecraft:base_stone_overworld', 'architects_palette:myonite')
    e.add('forge:chorus_additionally_grows_on', 'alexscaves:galena')
    e.add('forge:end_stones', 'alexscaves:galena')
})

ServerEvents.tags('worldgen/biome', e => {
    // e.add('minecraft:is_overworld', [
    //     'splendid_ranching:ancient_ruins',
    //     'splendid_ranching:dry_reef',
    //     'splendid_ranching:indigo_quarry',
    //     'splendid_ranching:magma_mounts',
    //     'splendid_ranching:moss_blanket',
    //     'splendid_ranching:opal_desert',
    //     'splendid_ranching:the_wilds'
    // ])
})