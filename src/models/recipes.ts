import * as mongoose from "mongoose";
import { RecipeInterface } from "../interfaces/recipeInterface";

const recipeSchema = new mongoose.Schema<RecipeInterface>({
   title: { type: String, required: true },
   description: { type: String, required: true },
   tags: [String],
   createdAt: { type: Date, default: new Date() },
   likeCount: { type: Number, default: 0 },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export { Recipe };
