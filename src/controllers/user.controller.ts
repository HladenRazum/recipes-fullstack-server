import * as mongoose from "mongoose";
import { User } from "../models/user.model";
import { Request, Response } from "express";

// Show all users
export const getAllUsers = async (req: Request, res: Response) => {
   try {
      const user = await User.find();
      res.status(200).json(user);
   } catch (error) {
      res.status(404).json({
         message: error.message,
      });
   }
};

// Create a new user
export const createUser = async (req: Request, res: Response) => {
   const user = req.body;
   const newUser = new User(user);

   try {
      await newUser.save();
      res.status(201).json(newUser);
   } catch (error) {
      res.status(409).json({
         message: error.message,
      });
   }
};
