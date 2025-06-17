import express, { Request, Response } from "express";

export const exampleRoutes = express.Router();

exampleRoutes.use("/", (req: Request, res: Response) => {
  res.send("You are in example route");
});
