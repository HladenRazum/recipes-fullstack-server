"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRouter = void 0;
const express = require("express");
const categories_1 = require("../controllers/categories");
const router = express.Router();
exports.categoriesRouter = router;
router.get("/", categories_1.getAllCategories);
router.post("/", categories_1.createCategory);
//# sourceMappingURL=categories.js.map