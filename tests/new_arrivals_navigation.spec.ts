import { test, expect } from '@playwright/test';

test('Navigate to Luisa Spagnoli and click New Arrivals', async ({ page }) => {
  // Navigate to the Luisa Spagnoli website
  await page.goto('https://www.luisaspagnoli.com/');

  // Click on the "New Arrivals" link
  await page.click('text=New Arrivals');

  // Verify that the "New Arrivals" page is loaded
  await expect(page).toHaveURL(/.*new-arrivals.*/);
});