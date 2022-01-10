import * as mongoose from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new mongoose.Schema<IUser>(
   {
      username: {
         type: String,
         required: true,
         unique: true,
         min: 3,
         max: 20,
      },

      password: {
         type: String,
         required: true,
         min: 3,
         max: 10,
      },
      // email: {
      //    type: String,
      //    required: true,
      //    unique: true,
      // },
   },
   // { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export { User };
