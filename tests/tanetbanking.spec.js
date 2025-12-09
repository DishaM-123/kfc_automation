import { test, expect } from '@playwright/test';
import { locators } from '../pages/orderslocators.js';
import { testData } from '../data/testdata.js';

test('test', async ({ page }) => {
  //Start Order 
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

  //Add Item 
  await page.locator(locators.category).getByTestId('category-click-test').click();
  await page.getByTestId(locators.addToCart).click();
  await page.getByTestId(locators.closeCart).getByRole('button', { name: 'Close' }).click();

  //checkout
  await page.getByTestId(locators.checkoutNav).click();
  await page.getByTestId(locators.continueAsGuest).click();
  await page.getByTestId(locators.fullNameInput).fill(testData.customer.name);
  await page.getByTestId(locators.emailInput).fill(testData.customer.email);
  await page.getByTestId(locators.phoneInput).fill(testData.customer.phone);
  await page.getByTestId(locators.payButton).click();
  await page.getByTestId(locators.phonePeOption).locator('span').click();
  await page.getByTestId(locators.continueToPayment).click();

  await page.getByRole('radio', { name: 'Net Banking' }).check();

  await page.getByRole('button', { name: 'PAY ₹' }).click();
  await page.getByText('Success').click();
  await page.getByRole('button', { name: 'Submit' }).click();

  // then wait for order-processing (app may take a few seconds)
  await page.waitForURL('**/order-processing', { timeout: 50000, waitUntil: 'domcontentloaded' });
  expect(page.url()).toContain('/order-processing');

  // finally wait for payment-success
  await page.waitForURL('**/payment-success', { timeout: 50000, waitUntil: 'domcontentloaded' });
  expect(page.url()).toContain('/payment-success');
});

