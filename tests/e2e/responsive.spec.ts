import { test, expect } from "@playwright/test"

const viewports = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 800 },
]

const pages = ["/", "/pricing", "/routes", "/about"]

for (const vp of viewports) {
  test.describe(`${vp.name} (${vp.width}px)`, () => {
    for (const path of pages) {
      test(`${path} renders without horizontal scroll`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height })
        await page.goto(path)
        await expect(page.locator("body")).toBeVisible()
        // Check for horizontal overflow
        const hasHorizontalOverflow = await page.evaluate(() => {
          return document.body.scrollWidth > document.body.clientWidth + 2
        })
        expect(hasHorizontalOverflow).toBe(false)
      })
    }
  })
}
