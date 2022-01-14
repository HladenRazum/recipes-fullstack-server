import * as mongoose from "mongoose";
import { Recipe } from "../models/recipe.model";
import { Request, Response } from "express";

// Show all recipes
export const getAllRecipes = async (req: Request, res: Response) => {
   try {
      const recipes = await Recipe.find();
      res.status(200).json(recipes);
   } catch (error) {
      res.status(404).json({
         message: error.message,
      });
   }
};

// Get a recipe by ID
export const getRecipeById = async (req: Request, res: Response) => {
   try {
      const id = req.params.recipeId;
      const recipe = await Recipe.findById(id);
      if (recipe) {
         res.status(200).json(recipe);
      }
   } catch (error) {
      res.status(404).json(error.message);
   }
};

// Create a new Recipe
export const createRecipe = async (req: Request, res: Response) => {
   let data = req.body;
   console.log(req.file);
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
      return res.status(400).json(errors.message);
   }

   try {
      await newRecipe.save();
      return res.status(201).json({
         message: "Recipe added successfully to database...",
         recipe: newRecipe,
      });
   } catch (error) {
      console.error(error.message);
      return res.status(409).json({
         message: error,
      });
   }
};

// Update Recipe
export const updateRecipe = async (req: Request, res: Response) => {
   const _id = req.params.recipeId;
   const recipe = req.body;

   if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("No recipe with this ID was found!");
   }

   try {
      const query = await Recipe.find({ _id: _id });
      const updatedRecipe = await Recipe.findOneAndUpdate(query, recipe, {
         new: true,
      });
      return res.status(200).json({ updatedRecipe });
   } catch (error) {
      res.status(404).send(error);
   }
};

// Delete a recipe
export const deleteRecipe = async (req: Request, res: Response) => {
   const _id = req.params.recipeId;

   if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("No recipe with this ID was found!");
   }

   try {
      const query = await Recipe.find({ _id: _id });
      await Recipe.findOneAndDelete(query);
      res.status(200).send("Recipe was successfully removed from database.");
   } catch (error) {
      res.status(404).send({
         error: error,
      });
   }
};
