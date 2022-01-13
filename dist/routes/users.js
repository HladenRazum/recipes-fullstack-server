"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express = require("express");
const users_controller_1 = require("../controllers/users.controller");
const router = express.Router();
exports.usersRouter = router;
router.get("/", users_controller_1.getAllUsers);
router.post("/", users_controller_1.createUser);
//# sourceMappingURL=users.js.map