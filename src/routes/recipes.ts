import * as express from "express";

import {
   getAllRecipes,
   createRecipe,
   updateRecipe,
} from "../controllers/recipeController";

const router = express.Router();

router.get("/", getAllRecipes);
router.post("/", createRecipe);
router.patch("/:recipeId", updateRecipe);

export { router as recipesRouter };
