import express, { Application, NextFunction, Request, Response } from "express";
import { exampleRoutes } from "./controllers/example.route";
export const app: Application = express();

// middleware
app.use(express.json()); // for body parser.

// route
app.use("/example", exampleRoutes);

// root route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the application");
});

// 404 route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("Path not found.");
});
