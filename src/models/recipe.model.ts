import * as mongoose from "mongoose";

interface Ingredient {
   ingredientName: string;
   ingredientPortion: string;
}

interface ImageModel {
   data: Buffer,
   contentType: String;
}

const imageSchema = new mongoose.Schema<ImageModel>({
   data: { type: Buffer, required: true },
   contentType: { type: String, required: true }
});

const ingredient = new mongoose.Schema<Ingredient>({
   ingredientName: { type: String, required: true, minLength: 2 },
   ingredientPortion: { type: String, required: true, minLength: 1 },
});

// const recipeImage = new mongoose.Schema({
//    url: String,
//    required: true,
// });

const recipeSchema = new mongoose.Schema({
   name: { type: String, trim: true, requred: true },
   category: { type: String, trim: true, required: true },
   instructions: { type: String, trim: true, required: true },
   ingredients: {
      type: [ingredient],
      required: true,
      validate: [checkMinimumCount, "Ingredients must be at least 3"],
   },
   recipe_img: { type: imageSchema, required: true }
   // category: mongoose.SchemaTypes.ObjectId,
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export { Recipe };

function checkMinimumCount(ingredients: Ingredient[]) {
   if (ingredients.length < 3) return false;
   else {
      return true;
   }
}
