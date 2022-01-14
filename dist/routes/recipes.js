"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipesRouter = void 0;
const express = require("express");
const multer = require("multer");
function fileFilter(req, file, cb) {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
}
;
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({
    storage: storage, limits: {
        fileSize: 1024 * 1024 * 5
    }
});
const recipes_controller_1 = require("../controllers/recipes.controller");
const router = express.Router();
exports.recipesRouter = router;
router.get("/", recipes_controller_1.getAllRecipes);
router.get("/:recipeId", recipes_controller_1.getRecipeById);
router.post("/", upload.single("recipe_img"), recipes_controller_1.createRecipe);
router.patch("/:recipeId", recipes_controller_1.updateRecipe);
router.delete("/:recipeId", recipes_controller_1.deleteRecipe);
//# sourceMappingURL=recipes.js.map