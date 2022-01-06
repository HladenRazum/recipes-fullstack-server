import * as mongoose from "mongoose";
import { CategoryInterface } from "../interfaces/category.interface";

const categorySchema = new mongoose.Schema<CategoryInterface>({
   category: String,
});

const Category = mongoose.model("Category", categorySchema);

export { Category };
