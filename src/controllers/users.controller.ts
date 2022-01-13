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
   const { username, password } = req.body;

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

   const hashedPassword = await bcrypt.hash(password, 10);
   const updatedUser = { ...req.body, password: hashedPassword };
   const newUser = new User(updatedUser);

   try {
      await newUser.save();
      res.status(201).json({
         message: "User created sucessfully",
         data: "token",
      });
   } catch (error) {
      // if (error.code === 11000) {
      //    return res.status(409).json({
      //       message: "Email or username is already in use",
      //    });
      // }
      res.status(409).json({
         message: error,
      });
   }
};

// Login an existing user
export const login = async (req: Request, res: Response) => {
   const { username, password } = req.body;

   try {
      const user = await User.findOne({ username }).lean();

      if (!user) {
         return res.status(404).json({ error: "Invalid username/password" });
      }

      if (JWT_SECRET.length === 0) {
         throw new Error("Something went wrong during authentication");
      }

      if (await bcrypt.compare(password, user.password)) {
         const token = jwt.sign(
            {
               id: user._id,
               username: user.username,
            },
            JWT_SECRET
         );
         return res.status(200).json({ token });
      }
   } catch (error) {
      res.status(404).json({
         error: error.message,
      });
   }
};

// Reset password
export const resetPassword = async (req: Request, res: Response) => {
   // Extract JasonWebToken
   const { token } = req.body;
   const user = jwt.verify(token, JWT_SECRET);
};
