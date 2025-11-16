ServerEvents.recipes(e => {
    for (let [stageId, stageObj] of Object.entries(global.recipeStages)) {
        e.forEachRecipe({ output: stageObj.items }, r => {
            e.stage({ id: r.getId() }, stageId)
        })
    }
})