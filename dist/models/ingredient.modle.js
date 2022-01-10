"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingredient = void 0;
const mongoose = require("mongoose");
const ingredientSchema = new mongoose.Schema({
    ingredientName: String,
    count: String,
});
const Ingredient = mongoose.model("Ingredient", ingredientSchema);
exports.Ingredient = Ingredient;
//# sourceMappingURL=ingredient.modle.js.map