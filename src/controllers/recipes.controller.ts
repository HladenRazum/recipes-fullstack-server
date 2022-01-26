import * as mongoose from "mongoose";
import { Recipe, IRecipe } from "../models/recipe.model";
import { Request, Response } from "express";
import { ERROR_CODES } from "../../constants";

// Show all recipes
export const getAllRecipes = async (req: Request, res: Response) => {
   try {
      const recipes = await Recipe.find()
         .exec()
         .then((docs) => {
            const response = docs.map((doc: IRecipe) => {
               return {
                  _id: doc._id,
                  name: doc.name,
                  category: doc.category,
                  instructions: doc.instructions,
                  ingredients: doc.ingredients,
                  url: "http://localhost:9000/" + doc.recipe_img,
                  featured: doc.featured,
               };
            });

            return response;
         });

      res.status(ERROR_CODES.OK).json(recipes);
   } catch (error) {
      res.status(ERROR_CODES.NOT_FOUND).json({
         message: error.message,
      });
   }
};

// Get a recipe by ID
export const getRecipeById = async (req: Request, res: Response) => {
   try {
      const id = req.params.recipeId;
      const recipe = await Recipe.findById(id)
         .exec()
         .then((doc: IRecipe) => {
            return {
               name: doc.name,
               category: doc.category,
               instructions: doc.instructions,
               ingredients: doc.ingredients,
               url: "http://localhost:9000/" + doc.recipe_img,
               featured: doc.featured,
            };
         });

      if (recipe) {
         res.status(ERROR_CODES.OK).json(recipe);
      }
   } catch (error) {
      res.status(ERROR_CODES.NOT_FOUND).json(error.message);
   }
};

// Get a recipe by Name
export const getRecipeByName = async (req: Request, res: Response) => {
   try {
      const { recipeName } = req.body;
      console.log(recipeName);
   } catch (error) {
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
      res.status(ERROR_CODES.NOT_FOUND).json(error.message);
   }
};

// Create a new Recipe
export const createRecipe = async (req: Request, res: Response) => {
   let data = req.body;
   data = {
      ...data,
      recipe_img: req.file.path,
      ingredients: JSON.parse(data.ingredients),
   };

   const newRecipe = new Recipe(data);
   const errors = newRecipe.validateSync();

   if (process.env.NODE_ENV === "development") {
      // console.log(newRecipe);
   }

   if (errors) {
      return res.status(ERROR_CODES.BAD_REQUEST).json(errors.message);
   }

   try {
      await newRecipe.save();
      return res.status(ERROR_CODES.OK).json({
         message: "Recipe added successfully to database...",
         recipe: newRecipe,
      });
   } catch (error) {
      console.error(error.message);
      return res.status(ERROR_CODES.NOT_FOUND).json({
         message: error,
      });
   }
};

// Update Recipe
export const updateRecipe = async (req: Request, res: Response) => {
   const _id = req.params.recipeId;
   const recipe = req.body;

   if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res
         .status(ERROR_CODES.NOT_FOUND)
         .send("No recipe with this ID was found!");
   }

   try {
      const query = await Recipe.find({ _id: _id });
      const updatedRecipe = await Recipe.findOneAndUpdate(query, recipe, {
         new: true,
      });
      return res.status(ERROR_CODES.OK).json({ updatedRecipe });
   } catch (error) {
      res.status(ERROR_CODES.NOT_FOUND).send(error);
   }
};

// Delete a recipe
export const deleteRecipe = async (req: Request, res: Response) => {
   const _id = req.params.recipeId;

   if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res
         .status(ERROR_CODES.NOT_FOUND)
         .send("No recipe with this ID was found!");
   }

   try {
      const query = await Recipe.find({ _id: _id });
      await Recipe.findOneAndDelete(query);
      res.status(ERROR_CODES.OK).send(
         "Recipe was successfully removed from database."
      );
   } catch (error) {
      res.status(ERROR_CODES.NOT_FOUND).send({
         error: error,
      });
   }
};
