import express from "express";

const app = express();

import bodyParser from "body-parser";

import { authRouter } from "./src/routes/auth";

app.use(bodyParser.json());

// Set default response content type to JSON
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use(authRouter);

export { app };
