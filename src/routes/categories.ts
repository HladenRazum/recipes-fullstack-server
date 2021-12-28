import * as express from "express";
import {
   createCategory,
   getAllCategories,
   deleteCategory,
} from "../controllers/categoryController";

const router = express.Router();
router.use(
   (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
   ) => {
      res.json(req);
      next();
   }
);

router.get("/", getAllCategories);
router.post("/", createCategory);
router.delete("/:categoryId", deleteCategory);

export { router as categoriesRouter };
