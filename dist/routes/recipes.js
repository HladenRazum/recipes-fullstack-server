"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipesRouter = void 0;
const express = require("express");
const recipeController_1 = require("../controllers/recipeController");
const router = express.Router();
exports.recipesRouter = router;
router.get("/", recipeController_1.getAllRecipes);
router.post("/", recipeController_1.createRecipe);
router.patch("/:recipeId", recipeController_1.updateRecipe);
//# sourceMappingURL=recipes.js.map