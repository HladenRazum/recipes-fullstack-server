import * as mongoose from "mongoose";
import { CategoryInterface } from "../interfaces/categoryInterface";


const categorySchema = new mongoose.Schema<CategoryInterface>({
   category: String
});

const Category = mongoose.model("Category", categorySchema);

export { Category };