import sharp from "sharp";
import { ReqQuery } from "../middlewares/validate-query-string";
import { createFileName } from "./create-file-name";

export const processImage = async (
  from: string,
  imageQuery: ReqQuery,
  to: string
) => {
  const { filename, width, height } = imageQuery;
  const requestedFile = createFileName({ filename, width, height });

  const resized = await sharp(`${from}/${filename}.jpg`).resize(
    Number(width),
    Number(height)
  );
  const result = await resized.toFile(`${to}/${requestedFile}`);
  return result;
};
