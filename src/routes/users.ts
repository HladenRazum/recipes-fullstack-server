import * as express from "express";
import { Request, Response, NextFunction } from "express";

const router = express.Router();
router.use((req: Request, res: Response, next: NextFunction) => {
   console.log(req.url);
   next();
});

router.get("/", (req: Request, res: Response) => {
   res.send("Get all users");
});

export { router as usersRouter };
