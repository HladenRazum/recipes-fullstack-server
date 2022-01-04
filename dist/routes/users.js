"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = express.Router();
exports.usersRouter = router;
router.get("/", user_controller_1.getAllUsers);
router.post("/", user_controller_1.createUser);
//# sourceMappingURL=users.js.map