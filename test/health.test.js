import test from "node:test";
import assert from "node:assert/strict";
import { handle } from "../src/server.js";
test("health endpoint", () => {
  const body = handle("/api/internal/health");
  assert.equal(body, JSON.stringify({ healthy: true, base: "/api/internal", dashboard: true }, null, 2));
});