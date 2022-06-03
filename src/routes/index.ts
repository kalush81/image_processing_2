import express, { Response, Request } from "express";
import imageRoute from "./api/imagesRoute";

const routes = express.Router();

routes.use("/api", imageRoute);

routes.get("/", (_req: Request, res: Response) => {
  res.send("home page of processing image app");
});

export default routes;
