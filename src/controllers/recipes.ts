import { Recipe } from "../models/recipes";
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

// Create a new Recipe
export const createRecipe = async (req: Request, res: Response) => {
   const recipe = req.body;
   const newRecipe = new Recipe(recipe);

   try {
      await newRecipe.save();
      res.status(201).json(newRecipe);
   } catch (error) {
      res.status(409).json({
         message: error.message,
      });
   }
};
