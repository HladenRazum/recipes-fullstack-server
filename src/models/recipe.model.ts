import * as mongoose from "mongoose";

const ingredientsSchema = new mongoose.Schema({
   name: { type: String, min: 2, required: true },
   count: { type: String, min: 1, required: true },
});

const recipeSchema = new mongoose.Schema({
   name: { type: String, requred: true },
   category: { type: String, required: true },
   instructions: { type: String, required: true },
   ingredients: { type: [ingredientsSchema], min: 3, required: true },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export { Recipe };
