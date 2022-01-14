"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const mongoose = require("mongoose");
const ingredient = new mongoose.Schema({
    ingredientName: { type: String, required: true, minLength: 2 },
    ingredientPortion: { type: String, required: true, minLength: 1 },
});
const recipeSchema = new mongoose.Schema({
    name: { type: String, trim: true, requred: true },
    category: { type: String, trim: true, required: true },
    instructions: { type: String, trim: true, required: true },
    ingredients: {
        type: [ingredient],
        required: true,
        validate: [checkMinimumCount, "Ingredients must be at least 3"],
    },
    recipe_img: { type: String, required: true },
    featured: { type: Boolean, default: false }
});
const Recipe = mongoose.model("Recipe", recipeSchema);
exports.Recipe = Recipe;
function checkMinimumCount(ingredients) {
    if (ingredients.length < 1)
        return false;
    else {
        return true;
    }
}
//# sourceMappingURL=recipe.model.js.map