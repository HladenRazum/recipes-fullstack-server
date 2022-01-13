import * as express from "express";
import * as multer from "multer";

const upload = multer({ dest: "uploads/" });

import {
   getAllRecipes,
   createRecipe,
   updateRecipe,
   deleteRecipe,
} from "../controllers/recipes.controller";

const router = express.Router();

router.get("/", getAllRecipes);
router.post("/", upload.single("recipe_img"), createRecipe);
router.patch("/:recipeId", updateRecipe);
router.delete("/:recipeId", deleteRecipe);

export { router as recipesRouter };
