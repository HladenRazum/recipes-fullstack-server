import * as express from "express";
import * as multer from "multer";

function fileFilter(req, file, cb) {
   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
   } else {
      cb(null, false);
   }
};


const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, "uploads");
   },
   filename: function (req, file, cb) {
      cb(null, file.originalname);
   },
   // fileFilter: fileFilter
});



const upload = multer({
   storage: storage, limits: {
      fileSize: 1024 * 1024 * 5
   }
});

import {
   getAllRecipes,
   createRecipe,
   updateRecipe,
   deleteRecipe,
   getRecipeById
} from "../controllers/recipes.controller";

const router = express.Router();

router.get("/", getAllRecipes);
router.get("/:recipeId", getRecipeById);
router.post("/", upload.single("recipe_img"), createRecipe);
router.patch("/:recipeId", updateRecipe);
router.delete("/:recipeId", deleteRecipe);

export { router as recipesRouter };
