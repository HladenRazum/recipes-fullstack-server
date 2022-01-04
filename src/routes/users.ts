import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { getAllUsers, createUser } from "../controllers/user.controller";
import { authPage, authUser } from "../middlewares/auth";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
// router.patch("/:recipeId", updateUser);
// router.delete("/:recipeId", deleteUser);

export { router as usersRouter };
