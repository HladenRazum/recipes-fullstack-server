import * as mongoose from "mongoose";
import { User } from "../models/user.model";
import { Request, Response } from "express";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

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

// Register a new user
export const createUser = async (req: Request, res: Response) => {
   const { username, password, email } = req.body;

   if (!username || typeof username !== "string") {
      res.status(409).json({
         status: "error",
         error: "Invalid username",
      });
   }

   if (!password || typeof password !== "string") {
      res.status(409).json({
         status: "error",
         error: "Invalid password",
      });
   }

   // const hashedPassword = await bcrypt.hash(password, 10);
   // const updatedUser = { ...req.body, password: hashedPassword };

   // const newUser = new User(updatedUser);
   const newUser = new User(req.body); // save without hashing

   try {
      await newUser.save();
      res.status(201).json({
         message: "User created sucessfully",
         data: "token",
      });
   } catch (error) {
      res.status(409).json({
         message: error,
      });
   }
};
