import { health } from "./routes.js";
import { json } from "./utils/format.js";

export function handle(path: string) {
  if (path === "/api/v1/health") return json(health());
  return json({ error: "not_found" });
}
