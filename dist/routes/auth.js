"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationRouter = void 0;
const express = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = express.Router();
exports.authenticationRouter = router;
router.post("/login", user_controller_1.login);
router.post("/reset-password", user_controller_1.resetPassword);
//# sourceMappingURL=auth.js.map