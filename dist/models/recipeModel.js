"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema({
    title: { type: String, requred: true },
    description: { type: String, required: true },
    tags: [String],
    createdAt: { type: Date, default: new Date() },
    likeCount: { type: Number, default: 0 },
});
const Recipe = mongoose.model("Recipe", recipeSchema);
exports.Recipe = Recipe;
//# sourceMappingURL=recipeModel.js.map