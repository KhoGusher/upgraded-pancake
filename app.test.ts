import express from "express";
const request = require("supertest");

const { app } = require("./app");
import bodyParser from "body-parser";

app.use(bodyParser.json());

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

import mongoose from "mongoose";

let mongo: any;
beforeAll(async () => {
  console.log("run b4 all...");

  await mongoose.connect(
    "mongodb+srv://khonantch:Aviation2621@cluster0.vk3clfz.mongodb.net/",
    {}
  );
}, 5000);

afterAll(async () => {
  await mongoose.connection.close();
}, 5000);

describe("POST signup", () => {
  describe("When I am given both email and password", () => {
    // test("Send email and password for signup and expect succesful insert and 201 response", async () => {
    //   const response = await request(app).post("/signup").send({
    //     email: "wwressldjdddslsskho@gmail.com",
    //     password: "sdfghlgkhhhdhhhhh",
    //   });
    //   expect(response.statusCode).toBe(201);
    // }, 30000);
    // test("send JSON type response", async () => {
    //   const email = "khoslggljjddK@gmail.com";
    //   const password = "sflggjdldfggsdscvvvvvvvv";
    //   const res = await request(app).post("/signup").send({
    //     email,
    //     password,
    //   });
    //   expect(res.headers["content-type"]).toEqual(
    //     expect.stringContaining("json")
    //   );
    // });
    //     test("response to contain ID", async () => {
    //       const email = "dosjdK@gmail.com";
    //       const password = "sfddsdffsjlkfdddggsdscvvvvvvvv";
    //       const res = await request(app).post("/signup").send({
    //         email,
    //         password,
    //       });
    //       //   console.log(res.text);
    //       console.log(res.body.user.email);
    //       console.log(res._body.user.email);
    //       expect(res.body.user._id).toBeDefined();
    //     });
  });

  describe("When email and password is missing", () => {
    test("Email or password not provided", async () => {
      const res = await request(app).post("/signup").send({
        email: "",
      });

      expect(res.statusCode).toBe(422);
    });
  });
});
