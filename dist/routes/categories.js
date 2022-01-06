"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRouter = void 0;
const express = require("express");
const category_controller_1 = require("../controllers/category.controller");
const router = express.Router();
exports.categoriesRouter = router;
router.get("/", category_controller_1.getAllCategories);
router.post("/", category_controller_1.createCategory);
router.delete("/:categoryId", category_controller_1.deleteCategory);
//# sourceMappingURL=categories.js.map