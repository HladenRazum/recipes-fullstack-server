"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const posts_1 = require("../controllers/posts");
const router = express.Router();
router.get("/", posts_1.getPosts);
exports.default = router;
//# sourceMappingURL=posts.js.map