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
exports.updateRecipe = exports.createRecipe = exports.getAllRecipes = exports.RecipeRepo = void 0;
const mongoose = require("mongoose");
const recipes_1 = require("../models/recipes");
class RecipeRepo {
    constructor(a, c, b) { }
}
exports.RecipeRepo = RecipeRepo;
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
// Update Recipe
exports.updateRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.params.recipeId;
    // get the new information from req.body
    const updatedRecipe = new recipes_1.Recipe();
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No recipe with this ID was found!");
    }
    try {
        const recipe = yield recipes_1.Recipe.findByIdAndUpdate(_id, updatedRecipe);
        return res.status(200).json({ recipe });
    }
    catch (error) {
        res.status(404).send(error);
    }
});
//# sourceMappingURL=re.js.map