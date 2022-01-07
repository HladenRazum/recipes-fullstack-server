import * as mongoose from "mongoose";
import { Recipe } from "../models/recipe.model";
import { Request, Response } from "express";
import { iRecipe } from "../interfaces/recipe.interface";

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

// Create a new Recipe
export const createRecipe = async (req: Request, res: Response) => {
   const data = req.body;
   if (data) {
      return res.status(200).json(data);
   }
   const newRecipe = new Recipe(data);
   try {
      await newRecipe.save();
      res.status(201).json(newRecipe);
   } catch (error) {
      res.status(409).json({
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
