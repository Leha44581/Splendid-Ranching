// All entries in global.nukelist will be removed from recipe viewers, loot
// tables, recipes, tags, ect.

global.nukelist = [
  "essentials:fertile_soil_wheat",
  "essentials:fertile_soil_carrot",
  "essentials:fertile_soil_potato",
  "essentials:fertile_soil_beetroot",
  "essentials:fertile_soil_netherwart",
  "essentials:fertile_soil_oak",
  "essentials:fertile_soil_birch",
  "essentials:fertile_soil_spruce",
  "essentials:fertile_soil_jungle",
  "essentials:fertile_soil_dark_oak",
  "essentials:fertile_soil_acacia",
  "essentials:fertile_soil_berry",
  "essentials:fertile_soil_brown_mushroom",
  "essentials:fertile_soil_red_mushroom",
  "essentials:bricks_iron",
  "essentials:bricks_gold",
  "essentials:bricks_tin",
  "essentials:bricks_bronze",
  "essentials:bricks_copshowium",
];

ServerEvents.tags("item", (event) => {
  event.removeAllTagsFrom(global.nukelist);
  event.add("ad:nukelist", global.nukelist);
  event.add("c:hidden_from_recipe_viewers", global.nukelist);
});

ServerEvents.tags("block", (event) => {
  event.removeAllTagsFrom(global.nukelist);
});

ServerEvents.tags("fluid", (event) => {
  event.removeAllTagsFrom(global.nukelist);
  event.add("ad:nukelist", global.nukelist);
  event.add("c:hidden_from_recipe_viewers", global.nukelist);
});

ServerEvents.recipes((event) => {
  event.remove({ input: global.nukelist });
  event.remove({ output: global.nukelist });
});

LootJS.modifiers((event) => {
  event
    .addLootTypeModifier(
      LootType.ENTITY,
      LootType.UNKNOWN,
      LootType.BLOCK,
      LootType.CHEST,
      LootType.FISHING,
      LootType.GIFT,
      LootType.ADVANCEMENT_ENTITY,
      LootType.ADVANCEMENT_REWARD,
      LootType.PIGLIN_BARTER
    )
    .removeLoot(global.nukelist);
});
