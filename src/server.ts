import { Server } from "http";
import app from "./app";
import config from "./config";

// Start the server
async function main() {
  const server: Server = app.listen(config.port, () => {
    console.log(`✅ Server is running on http://localhost:${config.port}`);
  });
}

main();
