import { Server } from "http";
import { app } from "./app";
import "dotenv/config";
import connectDB from "./config/database";

let server: Server;
const PORT = process.env.PORT || 5000;

async function main() {
  try {
    await connectDB();

    server = app.listen(PORT, () => {
      console.log(`✅ Example app listening on port ${PORT}`);
    });
  } catch (error) {
    console.log("Failed to start server\n", error);
  }
}
main();
