export const config = {
  port: Number(process.env.PORT ?? 8080),
  logLevel: process.env.LOG_LEVEL ?? "warn",
  newDashboard: (process.env.NEW_DASHBOARD ?? "true") === "true",
  apiBase: process.env.API_BASE ?? "/api/internal"
};