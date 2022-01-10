"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const mongoose = require("mongoose");
const ingredientsSchema = new mongoose.Schema({
    name: { type: String, min: 2, required: true },
    count: { type: String, min: 1, required: true },
});
const recipeSchema = new mongoose.Schema({
    name: { type: String, requred: true },
    category: { type: String, required: true },
    instructions: { type: String, required: true },
    ingredients: { type: [ingredientsSchema], min: 3, required: true },
});
const Recipe = mongoose.model("Recipe", recipeSchema);
exports.Recipe = Recipe;
//# sourceMappingURL=recipe.model.js.map