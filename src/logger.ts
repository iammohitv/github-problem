import { config } from "./config.js";

export function log(message: string) {
  if (config.logLevel !== "silent") {
    console.log(`[${config.logLevel}] ${message}`);
  }
}