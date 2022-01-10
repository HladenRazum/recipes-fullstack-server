import * as mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
   category: { type: String, trim: true, required: true },
});

const Category = mongoose.model("Category", categorySchema);

export { Category };
