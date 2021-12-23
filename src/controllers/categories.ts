import { Category } from "../models/categories";
import { Request, Response } from "express";

// Show all recipes
export const getAllCategories = async (req: Request, res: Response) => {
   try {
      const category = await Category.find();
      if (category) {
         res.status(200).json(category);
      } else {
         res.status(200).json([]);
      }
   } catch (error) {
      res.status(404).json({
         message: error.message,
      });
   }
};

// Create a new Recipe
export const createCategory = async (req: Request, res: Response) => {
   const category = req.body;
   const newCategory = new Category(category);

   try {
      await newCategory.save();
      res.status(201).json(newCategory);
   } catch (error) {
      res.status(409).json({
         message: error.message,
      });
   }
};