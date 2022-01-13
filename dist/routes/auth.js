"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationRouter = void 0;
const express = require("express");
const users_controller_1 = require("../controllers/users.controller");
const router = express.Router();
exports.authenticationRouter = router;
router.post("/login", users_controller_1.login);
router.post("/reset-password", users_controller_1.resetPassword);
//# sourceMappingURL=auth.js.map