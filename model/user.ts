import { Mongoose } from "mongoose";

const mongoos: Mongoose = require("mongoose");

interface User {
  username: string;
  email: string;
  password: string;
  createdAt: number;
}

const userSchema = new mongoos.Schema<User>({
  username: {
    type: String,
    required: true,
    maxlength: 9,
    minlength: 5,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    maxlength: 10,
    minlength: 6,
  },
});

exports.user = mongoos.model("users", userSchema);
