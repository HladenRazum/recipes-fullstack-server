import * as mongoose from "mongoose";
import { Ingredient } from "./ingredient.modle";

const recipeSchema = new mongoose.Schema({
   name: { type: String, requred: true },
   category: { type: String, required: true },
   instructions: { type: String, required: true },
   ingredients: { type: [Ingredient], required: true }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export { Recipe };
