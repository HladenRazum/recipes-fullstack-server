"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    createdAt: { type: Date, default: new Date() },
});
const User = mongoose.model("Recipe", userSchema);
exports.User = User;
//# sourceMappingURL=user.module.js.map