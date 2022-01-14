import * as express from "express";
import { login } from "../controllers/auth.controller";

const router = express.Router();

router.post("/login", login);
// router.post("/reset-password", resetPassword);

export { router as authenticationRouter };
