import express from "express";
const { check } = require("express-validator");

const router = express.Router();

import { AuthRepository } from "../controllers/auth";

router.get("/", AuthRepository.getUsers);

router.post(
  "/signup",
  check("email", "Email length should be 10 to 30 characters")
    .isEmail()
    .isLength({ min: 10, max: 30 }),

  check("password", "Password should be valid").isLength({ min: 8, max: 1024 }),
  AuthRepository.signUp
);

export { router as authRouter };
