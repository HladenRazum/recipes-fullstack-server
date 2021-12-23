"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipesRouter = void 0;
const express = require("express");
const recipes_1 = require("../controllers/recipes");
const router = express.Router();
exports.recipesRouter = router;
router.get("/", recipes_1.getAllRecipes);
router.post("/", recipes_1.createRecipe);
//# sourceMappingURL=recipes.js.map