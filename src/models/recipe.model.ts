import * as mongoose from "mongoose";
import { IRecipe } from "../interfaces/recipe.interface";

const recipeSchema = new mongoose.Schema<IRecipe>({
   name: { type: String, requred: true },
   category: { type: String, required: true },
   instructions: { type: String, required: true },
});

const Recipe = mongoose.model<IRecipe>("Recipe", recipeSchema);

export { Recipe };
