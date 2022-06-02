import express from "express";

import { validateQueryStrings } from "../../middlewares/validate-query-string";
import processImage from "../../middlewares/process-image";

const routes = express.Router();

routes.get("/images", validateQueryStrings, processImage);

export default routes;
