import { health } from "./routes.ts";
import { json } from "./utils/format.ts";

export function handle(path: string) {
  if (path === "/api/health") return json(health());
  return json({ error: "not_found" });
}