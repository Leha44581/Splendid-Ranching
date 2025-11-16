// Global variable for storing recipe stages, done in startup for server and client access without
// data sending (didn't work great kinda)

// stage_id: { name: stageDisplayName, items: itemids[] }
global.recipeStages = {
    // PLEEEEEEEEEASE DON'T MAKE DUPLICATE ITEMS IN STAGES THANK YOU.
    "create_basic": {
        "name": "Basic Mechanical Components",
        "items": [
            "create:cogwheel",
            "create:large_cogwheel",
            "create:shaft",
            "create:gearbox",
            "create:vertical_gearbox",
            "create:encased_chain_drive",
        ]
    }
}