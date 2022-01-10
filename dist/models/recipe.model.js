"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const mongoose = require("mongoose");
const ingredient = new mongoose.Schema({
    name: { type: String, required: true, minLength: 2 },
    count: { type: String, required: true, minLength: 2 },
});
// const recipeImage = new mongoose.Schema({
//    url: String,
//    required: true,
// });
const recipeSchema = new mongoose.Schema({
    name: { type: String, trim: true, requred: true },
    category: { type: String, trim: true, required: true },
    instructions: { type: String, trim: true, required: true },
    ingredients: {
        type: [ingredient],
        required: true,
        validate: [checkMinimumCount, "Ingredients must be at least 3"],
    },
    image: { type: String, required: true },
});
const Recipe = mongoose.model("Recipe", recipeSchema);
exports.Recipe = Recipe;
function checkMinimumCount(ingredients) {
    if (ingredients.length < 3)
        return false;
    // else if{
    //    (ingredients.map((ingredient, index) => {
    //       ingredient
    //    }))
    else {
        return true;
    }
}
//# sourceMappingURL=recipe.model.js.map