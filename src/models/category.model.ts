import * as mongoose from "mongoose";

const categorySchema = new mongoose.Schema<iCategory>({
   category: { type: String, required: true }
});

const Category = mongoose.model("Category", categorySchema);

export { Category };
