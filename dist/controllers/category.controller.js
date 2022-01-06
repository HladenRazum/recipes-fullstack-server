"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.createCategory = exports.getAllCategories = void 0;
const category_model_1 = require("../models/category.model");
const mongoose = require("mongoose");
// Show all recipes
exports.getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield category_model_1.Category.find();
        if (category) {
            res.status(200).json(category);
        }
        else {
            res.status(200).json([]);
        }
    }
    catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});
// Create a new Recipe
exports.createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = req.body;
    const newCategory = new category_model_1.Category(category);
    try {
        yield newCategory.save();
        res.status(201).json(newCategory);
    }
    catch (error) {
        res.status(409).json({
            message: error.message,
        });
    }
});
exports.deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.params.categoryId;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No categories with that id");
    }
    try {
        yield category_model_1.Category.findByIdAndDelete(_id);
        return res
            .status(200)
            .json({ message: "Category was removed from database" });
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=category.controller.js.map