import * as mongoose from "mongoose";

interface Ingredient {

}

const ingredientSchema = new mongoose.Schema({
   type: Map,
   of: String
});

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

export { Ingredient };
