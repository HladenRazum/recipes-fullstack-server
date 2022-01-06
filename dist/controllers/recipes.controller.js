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
exports.deleteRecipe = exports.updateRecipe = exports.createRecipe = exports.getAllRecipes = void 0;
const mongoose = require("mongoose");
const recipe_model_1 = require("../models/recipe.model");
// Show all recipes
exports.getAllRecipes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipes = yield recipe_model_1.Recipe.find();
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
    const newRecipe = new recipe_model_1.Recipe(recipe);
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
    const recipe = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No recipe with this ID was found!");
    }
    try {
        const query = yield recipe_model_1.Recipe.find({ _id: _id });
        const updatedRecipe = yield recipe_model_1.Recipe.findOneAndUpdate(query, recipe, {
            new: true,
        });
        return res.status(200).json({ updatedRecipe });
    }
    catch (error) {
        res.status(404).send(error);
    }
});
// Delete a recipe
exports.deleteRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.params.recipeId;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No recipe with this ID was found!");
    }
    try {
        const query = yield recipe_model_1.Recipe.find({ _id: _id });
        yield recipe_model_1.Recipe.findOneAndDelete(query);
        res.status(200).send("Recipe was successfully removed from database.");
    }
    catch (error) {
        res.status(404).send({
            error: error,
        });
    }
});
//# sourceMappingURL=recipes.controller.js.map