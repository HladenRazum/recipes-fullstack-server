"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipesRouter = void 0;
const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const recipes_controller_1 = require("../controllers/recipes.controller");
const router = express.Router();
exports.recipesRouter = router;
router.get("/", recipes_controller_1.getAllRecipes);
router.post("/", upload.single("recipe_img"), recipes_controller_1.createRecipe);
router.patch("/:recipeId", recipes_controller_1.updateRecipe);
router.delete("/:recipeId", recipes_controller_1.deleteRecipe);
//# sourceMappingURL=recipes.js.map