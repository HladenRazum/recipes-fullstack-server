import * as mongoose from "mongoose";
import { iRecipe } from "../interfaces/recipe.interface";

const recipeSchema = new mongoose.Schema<iRecipe>({
   name: { type: String, requred: true },
   category: { type: String, required: true },
   instructions: { type: String, required: true },
   // ingredient1: { type: String, required: true },
   // ingredient2: { type: String, required: true },
   // ingredient3: { type: String, required: true },
   // ingredientMeasure1: { type: String, required: true },
   // ingredientMeasure2: { type: String, required: true },
   // ingredientMeasure3: { type: String, required: true },
   // image: { type: String, required: true },
   // createdAt: { type: Date, default: new Date() },

   // ingredient4: { type: String, required: false },
   // ingredient5: { type: String, required: false },
   // ingredient6: { type: String, required: false },
   // ingredient7: { type: String, required: false },
   // ingredient8: { type: String, required: false },
   // ingredient9: { type: String, required: false },
   // ingredient10: { type: String, required: false },

   // ingredientMeasure4: { type: String, required: false },
   // ingredientMeasure5: { type: String, required: false },
   // ingredientMeasure6: { type: String, required: false },
   // ingredientMeasure7: { type: String, required: false },
   // ingredientMeasure8: { type: String, required: false },
   // ingredientMeasure9: { type: String, required: false },
   // ingredientMeasure10: { type: String, required: false },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export { Recipe };
