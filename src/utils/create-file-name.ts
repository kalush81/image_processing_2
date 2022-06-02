import { ReqQuery } from "../middlewares/validate-query-string";

export function createFileName(obj: ReqQuery): string {
  return Object.values(obj).join(",").replaceAll(",", "").concat(".jpg");
}
