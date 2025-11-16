ServerEvents.recipes(e => {
    // loop over recipe stages data
    for (let [stageId, stageObj] of Object.entries(global.recipeStages)) {
        // loop over recipes that output the staged item
        e.forEachRecipe({ output: stageObj.items }, r => {
            // apply recipe stage to recipes (only works on vanilla recipes)
            e.stage({ id: r.getId() }, stageId)
        })
    }
})