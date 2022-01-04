import * as express from "express";

const notFound = (req: express.Request, res: express.Response) =>
   res.status(404).send("Resource does not exist.");

export { notFound };
