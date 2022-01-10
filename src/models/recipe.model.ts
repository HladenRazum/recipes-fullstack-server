import * as mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
   name: { type: String, requred: true },
   category: { type: String, required: true },
   instructions: { type: String, required: true },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export { Recipe };
