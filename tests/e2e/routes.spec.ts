import { test, expect } from "@playwright/test"

test.describe("Routes Discovery", () => {
  test("shows route cards with real data", async ({ page }) => {
    await page.goto("/routes")
    await expect(page.getByRole("heading", { name: /Discover/i })).toBeVisible()
    await expect(page.getByText("Saturday Morning Coffee Crawl")).toBeVisible()
    await expect(page.getByText("Arts District Gallery Walk")).toBeVisible()
  })

  test("has category filter tabs", async ({ page }) => {
    await page.goto("/routes")
    await expect(page.getByText("Trending")).toBeVisible()
    await expect(page.getByText("Food & Drink")).toBeVisible()
  })
})

test.describe("Route Detail", () => {
  test("shows stops with check-in buttons", async ({ page }) => {
    await page.goto("/routes/saturday-morning-coffee-crawl")
    await expect(page.getByText("Saturday Morning Coffee Crawl")).toBeVisible()
    await expect(page.getByText("Stops")).toBeVisible()
    await expect(page.getByRole("button", { name: /Check in here/i }).first()).toBeVisible()
  })

  test("shows stamp collection", async ({ page }) => {
    await page.goto("/routes/saturday-morning-coffee-crawl")
    await expect(page.getByText("Your Stamp Collection")).toBeVisible()
  })

  test("shows leaderboard", async ({ page }) => {
    await page.goto("/routes/saturday-morning-coffee-crawl")
    await expect(page.getByText("Leaderboard")).toBeVisible()
  })
})

test.describe("Route Creator", () => {
  test("shows route builder form", async ({ page }) => {
    await page.goto("/routes/create")
    await expect(page.getByRole("heading", { name: /Create a Walking Route/i })).toBeVisible()
    await expect(page.getByText("Add stops to your route")).toBeVisible()
    await expect(page.getByRole("button", { name: "Save Route" })).toBeVisible()
  })
})

test.describe("Business Check-In", () => {
  test("shows check-in page with CTA", async ({ page }) => {
    await page.goto("/businesses/sip-and-stroll")
    await expect(page.getByRole("heading", { name: "Sip & Stroll Coffee" })).toBeVisible()
    await expect(page.getByRole("button", { name: "Check In Here" })).toBeVisible()
  })

  test("check-in flow shows stamp collected confirmation", async ({ page }) => {
    await page.goto("/businesses/sip-and-stroll")
    await page.getByRole("button", { name: "Check In Here" }).click()
    await expect(page.getByText("Checked in!")).toBeVisible()
    await expect(page.getByText("Stamp collected")).toBeVisible()
  })
})
