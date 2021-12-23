import * as express from "express";
import { createCategory, getAllCategories } from "../controllers/categories";

const router = express.Router();

router.get("/", getAllCategories);
router.post("/", createCategory);


export { router as categoriesRouter };