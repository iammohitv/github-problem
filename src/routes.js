import { config } from "./config.js";

export function health() {
  return { status: "ok", version: "1.0.0", base: config.apiBase };
}
