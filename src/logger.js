import { config } from "./config.js";

export function log(message) {
  if (config.logLevel !== "silent") {
    console.log(`[${config.logLevel}] ${message}`);
  }
}