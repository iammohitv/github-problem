import test from "node:test";
import assert from "node:assert/strict";
import { handle } from "../src/server.js";

test("health endpoint", () => {
  const body = handle("/api/health");
  assert.equal(body, JSON.stringify({ ok: true, base: "/api" }));
});