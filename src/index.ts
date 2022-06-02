import express, { Request, ErrorRequestHandler, Response } from "express";
import routes from "./routes";

export const app = express();

app.use(routes);

app.use((req, res) => {
  res.status(404).send("path doesn't exist");
});

app.use(
  (err: ErrorRequestHandler, req: Request, res: Response ) => {
    console.error(err);
    res
      .status(500)
      .send(
        "Our dumb backend developer did somethng wrong. We are going to kick his as and fix the issue asap :"
      );
  }
);

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
