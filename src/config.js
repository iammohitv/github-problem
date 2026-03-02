export const config = {
  port: Number(process.env.PORT ?? 3000),
  logLevel: process.env.LOG_LEVEL ?? "info",
  newDashboard: (process.env.NEW_DASHBOARD ?? "false") === "true",
  apiBase: process.env.API_BASE ?? "/api/v1"
};
