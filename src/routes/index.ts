import express from "express";
import imageRoute from "./api/imagesRoute";

const routes = express.Router();

routes.use("/api", imageRoute);

routes.get("/", (req, res) => {
  res.send("home page of processing image app");
});

export default routes;
