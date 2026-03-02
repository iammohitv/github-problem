import { config } from "./config.js";

export function health() {
  return { ok: true, base: config.apiBase };
}