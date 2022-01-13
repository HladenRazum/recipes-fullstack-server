import * as express from "express";
import { login, resetPassword } from "../controllers/users.controller";

const router = express.Router();

router.post("/login", login);
router.post("/reset-password", resetPassword);

export { router as authenticationRouter };
