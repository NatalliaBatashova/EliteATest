import { test, expect } from '@playwright/test';

test('Sort Cell Phones by Price Low to High', async ({ page }) => {
  // Step 1: Navigate to the homepage
  await page.goto('https://demowebshop.tricentis.com/');

  // Step 2: Click Electronics
  await page.getByRole('link', { name: 'Electronics' }).click();

  // Step 3: Click Cell phones
  await page.getByRole('link', { name: 'Cell phones' }).click();

  // Step 4: Sort by Price: Low to High
  await page.getByLabel('Sort by').selectOption({ label: 'Price: Low to High' });

  // Assertion: Verify that the sort order is Price: Low to High
  const selectedSort = await page.getByLabel('Sort by').inputValue();
  expect(selectedSort).toContain('Price: Low to High');

  // Optionally, check that the prices are sorted in ascending order
  const prices = await page.locator('.prices').allTextContents();
  const numericPrices = prices.map(text => parseFloat(text.replace(/[^\d.]/g, '')));
  const sortedPrices = [...numericPrices].sort((a, b) => a - b);
  expect(numericPrices).toEqual(sortedPrices);
});
