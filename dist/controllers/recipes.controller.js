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
exports.deleteRecipe = exports.updateRecipe = exports.createRecipe = exports.getRecipeById = exports.getAllRecipes = void 0;
const mongoose = require("mongoose");
const recipe_model_1 = require("../models/recipe.model");
// Show all recipes
exports.getAllRecipes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipes = yield recipe_model_1.Recipe.find()
            .exec()
            .then((docs) => {
            const response = docs.map((doc) => {
                return {
                    _id: doc._id,
                    name: doc.name,
                    category: doc.category,
                    instructions: doc.instructions,
                    ingredients: doc.ingredients,
                    url: "http://localhost:9000/" + doc.recipe_img,
                };
            });
            return response;
        });
        res.status(200).json(recipes);
    }
    catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});
// Get a recipe by ID
exports.getRecipeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.recipeId;
        const recipe = yield recipe_model_1.Recipe.findById(id);
        if (recipe) {
            res.status(200).json(recipe);
        }
    }
    catch (error) {
        res.status(404).json(error.message);
    }
});
// Create a new Recipe
exports.createRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data = req.body;
    console.log(req.file);
    data = Object.assign(Object.assign({}, data), { recipe_img: req.file.path, ingredients: JSON.parse(data.ingredients) });
    const newRecipe = new recipe_model_1.Recipe(data);
    const errors = newRecipe.validateSync();
    if (process.env.NODE_ENV === "development") {
        // console.log(newRecipe);
    }
    if (errors) {
        return res.status(400).json(errors.message);
    }
    try {
        yield newRecipe.save();
        return res.status(201).json({
            message: "Recipe added successfully to database...",
            recipe: newRecipe,
        });
    }
    catch (error) {
        console.error(error.message);
        return res.status(409).json({
            message: error,
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