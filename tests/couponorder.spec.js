import { test, expect } from '@playwright/test';
import { locators } from '../pages/orderslocators.js';
import { testData } from '../data/testdata.js';

test('Take Away Credit Card Order Flow', async ({ page }) => {

  // Start order
    await page.goto(testData.url);
    await page.getByTestId(locators.startOrderButton).click();
    await page.getByTestId(locators.pickupOption).click();
    await page.getByTestId(locators.storeSearchInput).fill(testData.storeSearch);
    await page.getByText(testData.storeLocation, { exact: true }).click();
    await page.getByTestId(locators.searchStoreComponent)
      .locator('div')
      .filter({ hasText: 'Test Aloha0.4 kmdeliverydine-' })
      .getByTestId('order-now')
      .click();
// Deals 

await page.getByTestId(locators.dealbutton).click();


});

// await page.getByTestId('load-more-btn').click();
//   await page.getByRole('button', { name: 'View Details Get flat Rs.125' }).click();
//   await page.getByTestId('menu-name-Menu').click();