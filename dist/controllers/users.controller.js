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
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
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
// Register a new user
exports.createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email } = req.body;
    if (!username || typeof username !== "string") {
        res.status(409).json({
            status: "error",
            error: "Invalid username",
        });
    }
    if (!password || typeof password !== "string") {
        res.status(409).json({
            status: "error",
            error: "Invalid password",
        });
    }
    const hashedPassword = yield bcrypt.hash(password, 10);
    const updatedUser = Object.assign(Object.assign({}, req.body), { password: hashedPassword });
    const newUser = new user_model_1.User(updatedUser);
    try {
        yield newUser.save();
        res.status(201).json({
            message: "User created sucessfully",
            data: "token",
        });
    }
    catch (error) {
        res.status(409).json({
            message: error,
        });
    }
});
//# sourceMappingURL=users.controller.js.map