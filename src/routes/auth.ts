import * as express from "express";
import { login, resetPassword } from "../controllers/user.controller";

const router = express.Router();

router.post("/login", login);
router.post("/reset-password", resetPassword);

export { router as authenticationRouter };
