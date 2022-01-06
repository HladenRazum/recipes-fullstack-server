"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRouter = void 0;
const express = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = express.Router();
exports.registerRouter = router;
router.post("/", user_controller_1.createUser);
//# sourceMappingURL=register.js.map