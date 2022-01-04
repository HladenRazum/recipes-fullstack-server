"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRouter = void 0;
const express = require("express");
const categoryController_1 = require("../controllers/categoryController");
const router = express.Router();
exports.categoriesRouter = router;
router.get("/", categoryController_1.getAllCategories);
router.post("/", categoryController_1.createCategory);
router.delete("/:categoryId", categoryController_1.deleteCategory);
//# sourceMappingURL=categories.js.map