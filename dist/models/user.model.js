"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
    },
    password: {
        type: String,
        required: true,
        min: 3,
        max: 10,
    },
});
const User = mongoose.model("User", userSchema);
exports.User = User;
//# sourceMappingURL=user.model.js.map