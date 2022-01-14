import * as mongoose from "mongoose";
import { User } from "../models/user.model";
import { Request, Response } from "express";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

// Login an existing user
export const login = async (req: Request, res: Response) => {
   const { username, password } = req.body;

   try {
      const user = await User.findOne({ username }).lean();

      if (!user) {
         res.status(404).json({
            error: "User with these credentials doesn't exist.",
         });
      }

      if (JWT_SECRET.length === 0) {
         throw new Error("Something went wrong during authentication");
      }
      await bcrypt.compare(password, user.password).then((match) => {
         if (!match) {
            res.status(401).json({ error: "Wrong credentials" });
         } else {
            res.status(200).json("Logged In");
         }
      });
   } catch (error) {
      res.status(404).json({
         error: error.message,
      });
   }
};

// Reset password
// export const resetPassword = async (req: Request, res: Response) => {
//    // Extract JasonWebToken
//    const { token } = req.body;
//    const user = jwt.verify(token, JWT_SECRET);
// };
