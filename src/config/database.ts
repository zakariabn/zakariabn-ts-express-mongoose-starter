import mongoose from "mongoose";
import "dotenv/config";
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/mydb";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(uri);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1); // Force exit on DB failure
  }
};

export default connectDB;
