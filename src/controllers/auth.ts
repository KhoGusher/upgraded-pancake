import { Request, Response } from "express";
const { User } = require("../models/User");
const { validationResult } = require("express-validator");

class AuthRepository {
  static async signUp(req: Request, res: Response) {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(422).send({ errors: result.array() });
    }

    // exists?
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).send("That user already exisits!");
    } else {
      user = new User({
        email: req.body.email,
        password: req.body.password,
      });

      await user.save();

      // console.log();

      res.status(201).send({ user });
    }
  }

  static async getUsers(req: Request, res: Response) {
    console.log(req.body);

    res.status(200).send(req.body);
  }
}

export { AuthRepository };
