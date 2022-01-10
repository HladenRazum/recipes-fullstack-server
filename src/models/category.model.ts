import * as mongoose from "mongoose";
import { iCategory } from "../interfaces/category.interface";

const categorySchema = new mongoose.Schema<iCategory>({
   category: { type: String, required: true }
});

const Category = mongoose.model("Category", categorySchema);

export { Category };
