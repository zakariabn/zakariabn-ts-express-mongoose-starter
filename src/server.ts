import { Server } from "http";
import { app } from "./app";
import "dotenv/config";
import mongoose from "mongoose";

let server: Server;
const PORT = process.env.PORT || 5000;
const MONGO_URI: string = process.env.MONGO_URI || "";

async function main() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("🟢 Connected to the database");
    server = app.listen(PORT, () => {
      console.log(`✅ Example app listening on port ${PORT}`);
    });
  } catch (error) {
    console.log("Failed to start server\n", error);
  }
}
main();
