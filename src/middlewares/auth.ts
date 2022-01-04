import { NextFunction, Request, Response } from "express";

const authPage = (req: Request, res: Response, next: NextFunction) => {
   console.log("ADMIN authenticated");
   next();
};

const authUser = (permissions) => {
   return (req: Request, res: Response, next: NextFunction) => {};
};

export { authPage, authUser };
