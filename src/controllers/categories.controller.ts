import { Category } from "../models/category.model";
import { Request, Response } from "express";
import * as mongoose from "mongoose";

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

export const deleteCategory = async (req: Request, res: Response) => {
   const _id = req.params.categoryId;

   if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("No categories with that id");
   }
   try {
      await Category.findByIdAndDelete(_id);
      return res
         .status(200)
         .json({ message: "Category was removed from database" });
   } catch (error) {
      console.log(error);
   }
};
