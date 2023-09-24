import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.testumtechnologies.com/');
  await page.locator('#top-bar-wrap').getByRole('link', { name: 'Testum Technologies' }).click();
  await page.getByRole('link', { name: 'Services', exact: true }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('link', { name: 'Read More' }).click();
});
