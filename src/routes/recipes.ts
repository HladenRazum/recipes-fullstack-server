import * as express from "express";

import {
   getAllRecipes,
   createRecipe,
   updateRecipe,
   deleteRecipe,
} from "../controllers/recipes.controller";

const router = express.Router();

router.get("/", getAllRecipes);
router.post("/", createRecipe);
router.patch("/:recipeId", updateRecipe);
router.delete("/:recipeId", deleteRecipe);

export { router as recipesRouter };
