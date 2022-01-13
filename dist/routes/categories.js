"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRouter = void 0;
const express = require("express");
const categories_controller_1 = require("../controllers/categories.controller");
const router = express.Router();
exports.categoriesRouter = router;
router.get("/", categories_controller_1.getAllCategories);
router.post("/", categories_controller_1.createCategory);
router.delete("/:categoryId", categories_controller_1.deleteCategory);
//# sourceMappingURL=categories.js.map