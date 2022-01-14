import * as mongoose from "mongoose";

interface Ingredient {
   ingredientName: string;
   ingredientPortion: string;
}



const ingredient = new mongoose.Schema<Ingredient>({
   ingredientName: { type: String, required: true, minLength: 2 },
   ingredientPortion: { type: String, required: true, minLength: 1 },
});

const recipeImage = new mongoose.Schema({
   url: String,
});

const recipeSchema = new mongoose.Schema({
   name: { type: String, trim: true, requred: true },
   category: { type: String, trim: true, required: true },
   instructions: { type: String, trim: true, required: true },
   ingredients: {
      type: [ingredient],
      required: true,
      validate: [checkMinimumCount, "Ingredients must be at least 3"],
   },
   recipe_img: { type: recipeImage, required: true }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export { Recipe };

function checkMinimumCount(ingredients: Ingredient[]) {
   if (ingredients.length < 1) return false;
   else {
      return true;
   }
}
