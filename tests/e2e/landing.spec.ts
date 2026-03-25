import { test, expect } from "@playwright/test"

test.describe("Landing Page", () => {
  test("loads successfully with title", async ({ page }) => {
    await page.goto("/")
    await expect(page).toHaveTitle(/CrawlGuide/)
    await expect(page.locator("h1")).toBeVisible()
  })

  test("has navbar with logo and nav links", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("navigation")).toBeVisible()
    await expect(page.getByRole("link", { name: "CrawlGuide" }).first()).toBeVisible()
    await expect(page.getByRole("link", { name: "Routes" }).first()).toBeVisible()
    await expect(page.getByRole("link", { name: "Pricing" }).first()).toBeVisible()
  })

  test("has hero section with CTA", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Turn your block")
    // CTA button
    const cta = page.getByRole("link", { name: /Start free|Start your free/i }).first()
    await expect(cta).toBeVisible()
    await cta.click()
    await expect(page).toHaveURL(/signup/)
  })

  test("has minimum 8 sections", async ({ page }) => {
    await page.goto("/")
    const sections = await page.locator("section").count()
    expect(sections).toBeGreaterThanOrEqual(8)
  })

  test("has footer with nav links", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator("footer")).toBeVisible()
    await expect(page.getByRole("link", { name: "Privacy" }).last()).toBeVisible()
    await expect(page.getByRole("link", { name: "Terms" }).last()).toBeVisible()
  })

  test("is responsive at 375px", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto("/")
    await expect(page.locator("h1")).toBeVisible()
    // No horizontal scroll
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth)
    expect(bodyWidth).toBeLessThanOrEqual(376)
  })
})
