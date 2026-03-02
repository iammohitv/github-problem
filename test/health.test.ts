test("health endpoint", () => {
  const body = handle("/api/v1/health");
  assert.equal(body, JSON.stringify({ status: "ok", version: "1.0.0", base: "/api/v1" }));
});
