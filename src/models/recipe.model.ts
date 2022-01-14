import * as mongoose from "mongoose";

interface Ingredient {
   ingredientName: string;
   ingredientPortion: string;
}

const ingredient = new mongoose.Schema<Ingredient>({
   ingredientName: { type: String, required: true, minLength: 2 },
   ingredientPortion: { type: String, required: true, minLength: 1 },
});


export interface IRecipe {
   name: string;
   category: string;
   instructions: string;
   ingredients: Ingredient[],
   recipe_img: string;
   featured?: boolean;
   _id?: mongoose.Types.ObjectId;
}

const recipeSchema = new mongoose.Schema({
   name: { type: String, trim: true, requred: true },
   category: { type: String, trim: true, required: true },
   instructions: { type: String, trim: true, required: true },
   ingredients: {
      type: [ingredient],
      required: true,
      validate: [checkMinimumCount, "Ingredients must be at least 3"],
   },
   recipe_img: { type: String, required: true },
   featured: { type: Boolean, default: false }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export { Recipe };

function checkMinimumCount(ingredients: Ingredient[]) {
   if (ingredients.length < 1) return false;
   else {
      return true;
   }
}
