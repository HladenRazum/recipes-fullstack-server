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
exports.createCategory = exports.getAllCategories = void 0;
const categories_1 = require("../models/categories");
// Show all recipes
exports.getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield categories_1.Category.find();
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
    const newCategory = new categories_1.Category(category);
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
//# sourceMappingURL=categories.js.map