import supertest from "supertest";
import { unlink } from "node:fs/promises";

import { app } from "../index";

const request = supertest(app);

describe("GET /", () => {
  it("should response with text/html", async () => {
    const response = await request.get("/");
    expect(response.statusCode).toEqual(200);
    expect(response.headers["content-type"]).toMatch(/text\/html/);
  });
  it("should response with 404 path not found", async () => {
    const response = await request.get("/somejeberish");
    expect(response.statusCode).toEqual(404);
    expect(response.headers["content-length"]).toEqual("18");
  });
  it("should response with insuficient params", async () => {
    const response = await request.get("/api/images?filanem=");
    expect(response.statusCode).toEqual(400);
  });
});

describe("GET with valid query params", () => {
  afterEach(() => {
    unlink("src/images/processed/fjord200200.jpg");
  });
  it("should send requested image", async () => {
    const response = await request.get(
      "/api/images?filename=fjord&width=200&height=200"
    );
    expect(response.statusCode).toEqual(200);
    expect(response.headers["content-type"]).toMatch(/image\/jpeg/);
  });
});
