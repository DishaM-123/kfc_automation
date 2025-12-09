import { test, expect } from '@playwright/test';
import { locators } from '../pages/orderslocators.js';
import { testData } from '../data/testdata.js';


test('Take Away Cash Order Flow', async ({ page }) => {

  // Start Order 
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

  // Add item
  await page.locator(locators.category).getByTestId('category-click-test').click();
  await page.getByTestId(locators.addToCart).click();
  await page.getByTestId(locators.closeCart).getByRole('button', { name: 'Close' }).click();

  // Checkout
  await page.getByTestId(locators.checkoutNav).click();
  await page.getByTestId(locators.continueAsGuest).click();
  await page.getByTestId(locators.fullNameInput).fill(testData.customer.name);
  await page.getByTestId(locators.emailInput).fill(testData.customer.email);
  await page.getByTestId(locators.phoneInput).fill(testData.customer.phone);
  await page.getByTestId(locators.payButton).click();
  await page.getByTestId(locators.cashPayment).locator('span').click();
  await page.getByTestId(locators.continueToPayment).click();


  // await page.goto('https://in-uat.pwa.kfc.dev/');
  // await page.getByTestId('start-order-button').click();
  // await page.getByTestId('disposition-order-click-handler-Disposition - Pickup').click();
  // await page.getByTestId('store-search-input').click();
  // await page.getByTestId('store-search-input').fill('nadaun');
  // await page.getByRole('option', { name: 'googleMapLocation Nadaun,' }).click();
  // await page.getByTestId('searchstore-component').locator('div').filter({ hasText: 'Test Aloha0.4 kmdeliverydine-' }).getByTestId('order-now').click();
  // // await page.locator('#category-name-CAT3417').click();
  // // await page.locator('#category-name-CAT3417').click();
  // await page.locator('#category-name-CAT3417').getByTestId('category-click-test').click();
  // await page.getByTestId('add-to-cart-A-34660-0').click();
  // await page.getByTestId('product-listing-button').click();
  // await page.getByTestId('normal-icon').getByRole('button', { name: 'Close' }).click();
  // await page.getByTestId('navigation-checkout-desktop').click();
  // await page.getByTestId('continue-as-a-gust').click();
  // await page.getByTestId('Full Name-masktextlabel-id').click();
  // await page.locator('body').press('CapsLock');
  // await page.getByTestId('enter-Full Name-details').fill('D');
  // await page.getByTestId('enter-Full Name-details').press('CapsLock');
  // await page.getByTestId('enter-Full Name-details').fill('Disha');
  // await page.getByTestId('email-masktextlabel-id').click();
  // await page.getByTestId('enter-email-details').fill('dbc3466@yum.com');
  // await page.getByText('Full Name*Email*Phone Number*').click();
  // await page.getByTestId('enter-phoneNumber-details').fill('9162537676');
  // await page.getByTestId('pay-button').click();
  // await page.getByTestId('radio-label-pay-by-cash').click();
  // await page.getByTestId('continue-to-payment-btn').click();


});
