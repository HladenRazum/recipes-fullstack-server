import * as mongoose from "mongoose";

export interface IUser {
   username: string;
   password: string;
}

const userSchema = new mongoose.Schema<IUser>(
   {
      username: {
         type: String,
         required: true,
         unique: true,
         // minlength: 3,
         trim: true,
      },

      password: {
         type: String,
         required: true,
         // minlength: 3,
         trim: true,
         lowercase: true,
      },
      // email: {
      //    type: String,
      //    required: true,
      //    unique: true,
      // },
   }
   // { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export { User };
