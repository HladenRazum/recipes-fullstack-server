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
exports.createUser = exports.getAllUsers = void 0;
const user_model_1 = require("../models/user.model");
// Show all users
exports.getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.User.find();
        res.status(200).json(user);
    }
    catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});
// Create a new user
exports.createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const newUser = new user_model_1.User(user);
    try {
        yield newUser.save();
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(409).json({
            message: error.message,
        });
    }
});
//# sourceMappingURL=user.controller.js.map