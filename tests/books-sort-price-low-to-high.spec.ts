import { test, expect } from '@playwright/test';

test('Navigate to Books and sort by Price Low to High', async ({ page }) => {
  // Step 1: Navigate to login page
  await page.goto('https://demowebshop.tricentis.com/login');

  // Step 2: Click on "Books" in the top menu
  await page.getByRole('link', { name: 'Books' }).click();

  // Step 3: Sort by "Price: Low to High"
  await page.getByLabel('Sort by').selectOption({ label: 'Price: Low to High' });

  // Optional: Assert that the sorting dropdown is set correctly
  const selected = await page.getByLabel('Sort by').inputValue();
  expect(selected).toContain('Price: Low to High');
});
