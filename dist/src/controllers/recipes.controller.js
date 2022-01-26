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
exports.deleteRecipe = exports.updateRecipe = exports.createRecipe = exports.getRecipeByName = exports.getRecipeById = exports.getAllRecipes = void 0;
const mongoose = require("mongoose");
const recipe_model_1 = require("../models/recipe.model");
const constants_1 = require("../../constants");
// Show all recipes
exports.getAllRecipes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    // Try to extract query from URL
    if (query.createdBy) {
        console.log(query);
        try {
            const recipes = yield recipe_model_1.Recipe.find({
                createdBy: query.createdBy,
            })
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
                        featured: doc.featured,
                        createdBy: doc.createdBy,
                    };
                });
                return response;
            });
            res.status(constants_1.ERROR_CODES.OK).json(recipes);
        }
        catch (error) {
            res.status(constants_1.ERROR_CODES.NOT_FOUND).json({
                message: error.message,
            });
        }
    }
    else {
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
                        featured: doc.featured,
                        createdBy: doc.createdBy,
                    };
                });
                return response;
            });
            res.status(constants_1.ERROR_CODES.OK).json(recipes);
        }
        catch (error) {
            res.status(constants_1.ERROR_CODES.NOT_FOUND).json({
                message: error.message,
            });
        }
    }
});
// Get a recipe by ID
exports.getRecipeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.recipeId;
        const recipe = yield recipe_model_1.Recipe.findById(id)
            .exec()
            .then((doc) => {
            return {
                name: doc.name,
                category: doc.category,
                instructions: doc.instructions,
                ingredients: doc.ingredients,
                url: "http://localhost:9000/" + doc.recipe_img,
                featured: doc.featured,
                createdBy: doc.createdBy,
            };
        });
        if (recipe) {
            res.status(constants_1.ERROR_CODES.OK).json(recipe);
        }
    }
    catch (error) {
        res.status(constants_1.ERROR_CODES.NOT_FOUND).json(error.message);
    }
});
// // Get all recipes by the same User
// export const getAllRecipesCreatedBySameUser = async (
//    req: Request,
//    res: Response
// ) => {
//    try {
//       const userId = req.body.userId;
//       if (!userId) {
//          res.status(404).json({
//             message: "Could not find such user",
//          });
//       }
//       const allUserRecipes = await Recipe.find({
//          createdBy: userId,
//       }).exec();
//       console.log(allUserRecipes);
//    } catch (error) {
//       res.status(404).json(error);
//    }
// };
// Get a recipe by Name
exports.getRecipeByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { recipeName } = req.body;
        console.log(recipeName);
    }
    catch (error) {
        //    const id = req.params.recipeId;
        //    const recipe = await Recipe.findById(id)
        //       .exec()
        //       .then((doc: IRecipe) => {
        //          return {
        //             name: doc.name,
        //             category: doc.category,
        //             instructions: doc.instructions,
        //             ingredients: doc.ingredients,
        //             url: "http://localhost:9000/" + doc.recipe_img,
        //             featured: doc.featured,
        //          };
        //       });
        //    if (recipe) {
        //       res.status(200).json(recipe);
        //    }
        res.status(constants_1.ERROR_CODES.NOT_FOUND).json(error.message);
    }
});
// Create a new Recipe
exports.createRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data = req.body;
    console.log(data.createdBy);
    data = Object.assign(Object.assign({}, data), { recipe_img: req.file.path, ingredients: JSON.parse(data.ingredients), createdBy: data.createdBy });
    const newRecipe = new recipe_model_1.Recipe(data);
    const errors = newRecipe.validateSync();
    if (process.env.NODE_ENV === "development") {
        console.log(newRecipe);
    }
    if (errors) {
        return res.status(constants_1.ERROR_CODES.BAD_REQUEST).json(errors.message);
    }
    try {
        yield newRecipe.save();
        return res.status(constants_1.ERROR_CODES.OK).json({
            message: "Recipe added successfully to database...",
            recipe: newRecipe,
        });
    }
    catch (error) {
        console.error(error.message);
        return res.status(constants_1.ERROR_CODES.NOT_FOUND).json({
            message: error,
        });
    }
});
// Update Recipe
exports.updateRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.params.recipeId;
    const recipe = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res
            .status(constants_1.ERROR_CODES.NOT_FOUND)
            .send("No recipe with this ID was found!");
    }
    try {
        const query = yield recipe_model_1.Recipe.find({ _id: _id });
        const updatedRecipe = yield recipe_model_1.Recipe.findOneAndUpdate(query, recipe, {
            new: true,
        });
        return res.status(constants_1.ERROR_CODES.OK).json({ updatedRecipe });
    }
    catch (error) {
        res.status(constants_1.ERROR_CODES.NOT_FOUND).send(error);
    }
});
// Delete a recipe
exports.deleteRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.params.recipeId;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res
            .status(constants_1.ERROR_CODES.NOT_FOUND)
            .send("No recipe with this ID was found!");
    }
    try {
        const query = yield recipe_model_1.Recipe.find({ _id: _id });
        yield recipe_model_1.Recipe.findOneAndDelete(query);
        res.status(constants_1.ERROR_CODES.OK).send("Recipe was successfully removed from database.");
    }
    catch (error) {
        res.status(constants_1.ERROR_CODES.NOT_FOUND).send({
            error: error,
        });
    }
});
//# sourceMappingURL=recipes.controller.js.map