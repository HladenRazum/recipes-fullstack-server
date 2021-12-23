import * as express from "express";
import {
   createCategory,
   getAllCategories,
   deleteCategory,
} from "../controllers/categories";

const router = express.Router();

router.get("/", getAllCategories);
router.post("/", createCategory);
router.delete("/:categoryId", deleteCategory);

export { router as categoriesRouter };
