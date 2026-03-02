import { config } from "./config.js";

export function health() {
  return { healthy: true, base: config.apiBase, dashboard: config.newDashboard };
}