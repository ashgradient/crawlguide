import { test, expect } from "@playwright/test"

test.describe("Dashboard", () => {
  test("shows stat cards", async ({ page }) => {
    await page.goto("/dashboard")
    await expect(page.getByText("Check-ins This Week")).toBeVisible()
    await expect(page.getByText("Peak Day")).toBeVisible()
    await expect(page.getByText("Active Routes")).toBeVisible()
    await expect(page.getByText("Leaderboard Rank")).toBeVisible()
  })

  test("has check-in trends chart", async ({ page }) => {
    await page.goto("/dashboard")
    await expect(page.getByText("Check-in Trends")).toBeVisible()
    // Time period tabs
    await expect(page.getByText("7d")).toBeVisible()
    await expect(page.getByText("30d")).toBeVisible()
    await expect(page.getByText("90d")).toBeVisible()
  })

  test("shows active routes grid", async ({ page }) => {
    await page.goto("/dashboard")
    await expect(page.getByText("Active Routes")).toBeVisible()
  })

  test("has recent activity feed", async ({ page }) => {
    await page.goto("/dashboard")
    await expect(page.getByText("Recent Activity")).toBeVisible()
  })

  test("has quick actions panel", async ({ page }) => {
    await page.goto("/dashboard")
    await expect(page.getByText("Quick Actions")).toBeVisible()
    await expect(page.getByRole("link", { name: /Create New Route/i })).toBeVisible()
  })
})
