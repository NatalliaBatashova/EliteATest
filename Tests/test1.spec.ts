import { test, expect } from '@playwright/test';

test('open page and check Home link', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.luisaspagnoli.com/en/gb');

  // Verify the page title
  const title = await page.title();
  expect(title).toBe('Luisa Spagnoli Online Shop - Clothing and Accessories');

  // Check for a specific element
  const homeLink = await page.getByRole('link', { name: 'Luisa Spagnoli Home' });
  await expect(homeLink).toBeVisible();
  await homeLink.click();

});

test('check New Arrivals', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.luisaspagnoli.com/en/gb');


  // Check for a specific element
  const newArrivalsLink = await page.getByRole('link', { name: 'New Arrivals' });
  await newArrivalsLink.click();
  const parentCenter = page.locator('.text-center');
  const title = parentCenter.getByRole('heading', { name: 'NEW ARRIVALS' });
  await title.highlight();

  // Pause for 3 seconds
  await page.waitForTimeout(3000);
  
});

test('check Shopping Card', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.luisaspagnoli.com/en/gb');
  await page.getByRole('button', { name: /Cart/i }).click();
});

