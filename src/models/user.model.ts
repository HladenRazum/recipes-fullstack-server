import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema(
   {
      username: {
         type: String,
         required: true,
         unique: true,
         minlength: 3,
         maxlength: 20,
         trim: true,
      },

      password: {
         type: String,
         required: true,
         minlength: 3,
         maxlength: 15,
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
