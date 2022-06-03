import { Request, Response, NextFunction } from "express";
import fs from "node:fs/promises";

export interface ReqQuery {
  filename: string;
  width: string;
  height: string;
}
export const full = "src/images/full";

export const validateQueryStrings = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const obj: ReqQuery = req.query as unknown as ReqQuery;
  if (obj.filename && obj.width && obj.height) {
    try {
      const imgFiles = await fs.readdir(full);
      if (imgFiles.includes(obj.filename + ".jpg")) {
        req.data = obj;
        try {
          await fs.mkdir("src/images/processed");
        } catch (error) {
          console.log(error);
        }
        return next();
      }
      return res.status(400).send(`Image ${obj.filename} does not exist`);
    } catch (error) {
      console.log(error);
      return res.status(500).send("internall server error");
    }
  }

  res.status(400).send("Insuficient params");
};
