import * as express from "express";
import { getAllUsers, createUser } from "../controllers/users.controller";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);

// router.patch("/:recipeId", updateUser);
// router.delete("/:recipeId", deleteUser);

export { router as usersRouter };
