import test from "node:test";
import assert from "node:assert/strict";
import { handle } from "../src/server.js";

test("health endpoint", () => {
  const body = handle("/api/v1/health");
  assert.equal(body, JSON.stringify({ status: "ok", version: "1.0.0" }));
});