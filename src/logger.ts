import { config } from "./config.js";

export function log(message: string) {
  if (config.logLevel === "silent") return;
  console.log(`level=${config.logLevel} msg="${message}"`);
}