declare namespace Express {
  export interface Request {
    data: {
      filename: string;
      width: string;
      height: string;
    };
  }
}
