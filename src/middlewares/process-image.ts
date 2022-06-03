import { Request, Response, NextFunction } from "express";
import fs from "node:fs/promises";
import path from "node:path";

import { createFileName } from "../utils/create-file-name";
import { full } from "./validate-query-string";
import { processImage } from "../utils/process-image";

export default async (req: Request, res: Response, next: NextFunction): Promise<void>=> {
  const processed = "src/images/processed";
  const requestedFile = createFileName(req.data);
  const pathToFile = path.join(__dirname, "../../", processed, requestedFile);

  const imgFiles = await fs.readdir(processed);

  if (!imgFiles.includes(requestedFile)) {
    try {
      await processImage(full, req.data, processed);
    } catch (error) {
      next(error);
    }
  }
  res.sendFile(pathToFile);
};
