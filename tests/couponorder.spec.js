import { test, expect } from '@playwright/test';
import { locators } from '../pages/orderslocators.js';
import { testData } from '../data/testdata.js';

test('Order with Coupon  Flow', async ({ page }) => {

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
    await page.getByTestId(locators.loadmorebutton).click();
   
    await page.getByRole('button', { name: 'View Details Get flat Rs.125' }).click();
    await page.getByTestId(locators.menubutton).click();
    await page.getByLabel(locators.couponorder).click();

    await page.locator(locators.ChickenBuckets).getByTestId('category-click-test').click();
    await page.getByTestId(locators.Bucketprice).click();
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



});

