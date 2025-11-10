// priority: 999

// on world load, set servers slime value data if not set yet in the world
ServerEvents.loaded(e => {
    // this SHOULD only occur on first world load, but in the future if the pack continues
    //  it should instead check if the entries are equal to base data and merge them if not for update compatibility
    if (e.server.persistentData['slime_value_data'] === undefined) {
        // set all base server values
        e.server.persistentData['slime_value_data'] = global.baseSlimeValueData
        e.server.persistentData['daily_sold_plorts'] = {}
        e.server.persistentData['daily_sold_total'] = 0
    }
})

// send slime value data to clients for tooltip information
PlayerEvents.tick(e => {
    if (Utils.server.tickCount % 200 === 0) { // update every 10 seconds
        e.player.sendData('kubejs:slime_value_data', e.server.persistentData['slime_value_data'])
    }
})

// debug used for testing, comment on release
ItemEvents.firstLeftClicked('minecraft:diamond_sword', e => {
    e.player.tell(`reset all stored server data to defaults!`)
    e.server.persistentData['slime_value_data'] = global.baseSlimeValueData
    e.server.persistentData['daily_sold_plorts'] = {}
    e.server.persistentData['daily_sold_total'] = 0
})

// daily updates
ServerEvents.tick(e => {
    if (Utils.server.tickCount % 20 != 0) { return } // update once a second
    let dayTime = e.server.getLevel('minecraft:overworld').dayTime()
    let morningModulo = dayTime % 24000 // "6 am" every minecraft day

    // e.server.tell(`${dayTime}, ${morningModulo}`) // debug 

    let dailySoldPlorts = e.server.persistentData['daily_sold_plorts']
    let dailySoldTotal = e.server.persistentData['daily_sold_total']

    if (morningModulo >= 0 && morningModulo < 20) { // if within 20 ticks of "6 am"
        e.server.tell("| Good morning, Rancher!")
        if (dailySoldTotal > 0) { // if there was anything sold, tell about it
            e.server.tell(`|| Yesterday you sold:`)
            for (let plortid in dailySoldPlorts) {
                let count = dailySoldPlorts[plortid]
                e.server.tell(Text.of(`${count} ${plortid} plorts`).color(global.slimeDefinitionsData[plortid].color))
            }
            e.server.tell(`|| For a total of §6${dailySoldTotal}§a☻!`)
            e.server.persistentData['daily_sold_plorts'] = {}
            e.server.persistentData['daily_sold_total'] = 0
        }
        e.server.tell(`| Todays hot demands are: ${`placeholder`}`)
    }
})