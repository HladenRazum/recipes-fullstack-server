"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRecipe = exports.getAllRecipes = void 0;
const recipes_1 = require("../models/recipes");
// Show all recipes
exports.getAllRecipes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipes = yield recipes_1.Recipe.find();
        res.status(200).json(recipes);
    }
    catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});
// Create a new Recipe
exports.createRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recipe = req.body;
    const newRecipe = new recipes_1.Recipe(recipe);
    try {
        yield newRecipe.save();
        res.status(201).json(newRecipe);
    }
    catch (error) {
        res.status(409).json({
            message: error.message,
        });
    }
});
//# sourceMappingURL=recipes.js.map