import { defineConfig } from "@playwright/test"

export default defineConfig({
  testDir: "./tests/e2e",
  baseURL: "http://localhost:3099",
  use: {
    headless: true,
    screenshot: "only-on-failure",
  },
  webServer: {
    command: "npm run dev -- --port 3099",
    url: "http://localhost:3099",
    reuseExistingServer: true,
    timeout: 30000,
  },
})
