import { timeStamp } from "console";
import mongoose from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new mongoose.Schema<IUser>(
  {
    firstName: { type: String },
    lastName: { type: String, trim: true },
  },
  { timestamps: true }
);
