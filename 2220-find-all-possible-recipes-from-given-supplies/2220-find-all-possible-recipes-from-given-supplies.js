/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    let available = new Set(supplies); // What we already have
    let needs = new Map(); // Recipe → Required Ingredients

    recipes.forEach((r, i) => needs.set(r, ingredients[i]));

    let updated = true;
    while (updated) { // Keep going until we can't make anything new
        updated = false;
        for (let r of recipes) {
            if (available.has(r)) continue; // Already made
            
            let canMake = needs.get(r).every(ing => available.has(ing));
            if (canMake) {
                available.add(r);
                updated = true;
            }
        }
    }

    return recipes.filter(r => available.has(r));
};