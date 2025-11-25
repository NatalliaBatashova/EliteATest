import { test, expect } from '@playwright/test';

test('Navigate to EPAM and click on Services link', async ({ page }) => {
  // Navigate to EPAM homepage
  await page.goto('https://www.epam.com/');

  // Click on the Services link in the top menu
  await page.click('a[href="/services"]');

  // Verify that the Services page is loaded
  await expect(page).toHaveURL('https://www.epam.com/services');
});