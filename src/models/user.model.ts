import * as mongoose from "mongoose";
import { UserClass } from "../interfaces/user.interface";

const userSchema = new mongoose.Schema(
   {
      username: {
         type: String,
         required: true,
         unique: true,
         min: 3,
         max: 20,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      password: {
         type: String,
         required: true,
         min: 3,
         max: 10,
      },
   },
   { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export { User };
