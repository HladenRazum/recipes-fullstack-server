"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipesRouter = void 0;
const express = require("express");
const recipesController_1 = require("../controllers/recipesController");
const router = express.Router();
exports.recipesRouter = router;
router.get("/", recipesController_1.getAllRecipes);
router.post("/", recipesController_1.createRecipe);
router.patch("/:recipeId", recipesController_1.updateRecipe);
router.delete("/:recipeId", recipesController_1.deleteRecipe);
//# sourceMappingURL=recipes.js.map