import * as express from "express";

import { getAllRecipes, createRecipe } from "../controllers/recipes";

const router = express.Router();

router.get("/", getAllRecipes);
router.post("/", createRecipe);

export { router as recipesRouter };
