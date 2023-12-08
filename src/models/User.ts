const Joi = require("joi");
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 800,
    },
  })
);

interface UserI {
  email: string;
  password: string;
}

// function validateUser(user: UserI) {
//   const schema = {
//     email: Joi.string().min(5).max(255).required().email(),
//     password: Joi.string().min(5).max(255).required(),
//   };
//   return Joi.string().validate(user, schema);
// }

exports.User = User;
// exports.validate = validateUser;
