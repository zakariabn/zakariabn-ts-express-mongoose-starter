import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    isComplete: { type: Boolean, default: false },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true, versionKey: false }
);

const Todo = mongoose.model("todos", todoSchema);
