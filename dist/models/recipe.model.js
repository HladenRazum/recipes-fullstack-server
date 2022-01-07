"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema({
    name: { type: String, requred: true },
    category: { type: String, required: true },
    instructions: { type: String, required: true },
    ingredient1: { type: String, required: true },
    ingredient2: { type: String, required: true },
    ingredient3: { type: String, required: true },
    ingredientMeasure1: { type: String, required: true },
    ingredientMeasure2: { type: String, required: true },
    ingredientMeasure3: { type: String, required: true },
    image: { type: String, required: true },
    createdAt: { type: Date, default: new Date() },
});
const Recipe = mongoose.model("Recipe", recipeSchema);
exports.Recipe = Recipe;
//# sourceMappingURL=recipe.model.js.map