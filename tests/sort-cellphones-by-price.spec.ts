import { test, expect } from '@playwright/test';

test('Sort cell phones by price low to high', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://demowebshop.tricentis.com/login');

  // Click on 'Electronics' in the top menu
  await page.getByRole('link', { name: 'Electronics' }).click();

  // Click on 'Cell phones'
  await page.getByRole('link', { name: 'Cell phones' }).click();

  // Select 'Price: Low to High' from the Sort By dropdown
  await page.getByLabel('Sort by').selectOption({ label: 'Price: Low to High' });

  // Optionally, verify that the sort order is correct
  // (Implementation depends on the page structure)
});
