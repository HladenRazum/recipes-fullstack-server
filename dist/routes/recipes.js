"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const recipes_1 = require("../controllers/recipes");
const router = express.Router();
router.get("/", recipes_1.getAllRecipes);
exports.default = router;
//# sourceMappingURL=recipes.js.map