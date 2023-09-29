import { test, expect } from '@playwright/test';

test('Testum Technologies', async ({ page }) => {
  await page.goto('https://www.testumtechnologies.com/');
  await page.locator('#top-bar-wrap').getByRole('link', { name: 'Testum Technologies' }).click();
  await page.getByRole('link', { name: 'Services', exact: true }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('link', { name: 'Read More' }).click();
  await page.getByRole('heading', { name: 'About Us' }).click();
  await page.getByRole('link', { name: 'Who We Are' }).click();
  await page.getByRole('link', { name: 'Our Mission' }).click();
  await page.getByRole('link', { name: 'Our Vission' }).click();
  // expect(await page.getByRole('link', { name: 'Our Vission' })).toHaveText('Our Mission'); // failing test intensional to see failure notification in email and slack
});
