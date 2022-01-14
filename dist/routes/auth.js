"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationRouter = void 0;
const express = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const router = express.Router();
exports.authenticationRouter = router;
router.post("/login", auth_controller_1.login);
//# sourceMappingURL=auth.js.map