"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    tags: [String],
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});
const Recipe = mongoose.model("Recipe Message", recipeSchema);
exports.Recipe = Recipe;
//# sourceMappingURL=recipe.js.map