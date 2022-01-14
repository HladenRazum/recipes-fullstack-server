"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
}
// { timestamps: true }
);
const User = mongoose.model("User", userSchema);
exports.User = User;
//# sourceMappingURL=user.model.js.map