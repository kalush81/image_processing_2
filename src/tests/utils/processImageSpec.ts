import { processImage } from "../../utils/process-image";
import fs from "node:fs/promises";

type ImgObj = {
  format: string;
  width: number;
  height: number;
  channels: number;
  premultiplied: boolean;
  size: number;
};
const img: ImgObj = {
  format: "jpeg",
  width: 200,
  height: 400,
  channels: 3,
  premultiplied: false,
  size: 11905,
};

describe("test utils functions", () => {
  afterEach(async () => {
    await fs.unlink("src/images/processed/fjord200400.jpg");
  });
  it(`should return sharp object`, async () => {
    const from = "src/images/full";
    const query = { filename: "fjord", width: "200", height: "400" };
    const to = "src/images/processed";
    const result = await processImage(from, query, to);
    expect(result as unknown as ImgObj).toEqual(img);
  });
});
