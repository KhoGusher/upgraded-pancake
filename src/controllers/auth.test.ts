import request from "supertest";
import { app } from "../../app";
import { AuthRepository } from "./auth";

describe("Auth Routes", () => {
  describe("GET /", () => {
    it("should return all users", async () => {
      const response = await request(app).get("/api/auth");
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("users");
    });
  });

  describe("POST /signup", () => {
    it("should create a new user", async () => {
      const userData = {
        email: "test@example.com",
        password: "password123",
      };

      const response = await request(app)
        .post("/api/auth/signup")
        .send(userData);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("user");
      expect(response.body.user.email).toBe(userData.email);
    });

    it("should return an error for invalid email", async () => {
      const userData = {
        email: "invalidemail",
        password: "password123",
      };

      const response = await request(app)
        .post("/api/auth/signup")
        .send(userData);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("errors");
      expect(response.body.errors[0].msg).toBe(
        "Email length should be 10 to 30 characters"
      );
    });

    it("should return an error for invalid password", async () => {
      const userData = {
        email: "test@example.com",
        password: "short",
      };

      const response = await request(app)
        .post("/api/auth/signup")
        .send(userData);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("errors");
      expect(response.body.errors[0].msg).toBe("Password should be valid");
    });
  });
});
