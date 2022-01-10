"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema({
    name: { type: String, requred: true },
    category: { type: String, required: true },
    instructions: { type: String, required: true },
});
const Recipe = mongoose.model("Recipe", recipeSchema);
exports.Recipe = Recipe;
//# sourceMappingURL=recipe.model.js.map