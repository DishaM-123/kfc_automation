import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import gachibowlistore from '../data/storelist.json' assert { type: "json" };
import userdata from './userdetails.json' assert { type: "json" };

dotenv.config();

test('Place order on KFC app', async ({ page }) => {
  // Step 1: Launch app
  await page.goto(process.env.BASE_URL);
  await page.getByTestId(locators.homePage.startOrderBtn).click();
  await page.getByTestId(locators.homePage.pickupBtn).click();

  // Step 2: Search store
  await page.getByTestId(locators.storePage.searchInput).fill(testData.storeSearch.query);
  await page.getByText(testData.storeSearch.fullAddress, { exact: true }).click();

  await page.getByTestId(locators.storePage.searchComponent)
    .locator('div')
    .filter({ hasText: testData.storeSearch.storeName })
    .getByTestId(locators.storePage.orderNowBtn)
    .click();

  // Step 3: Product selection
  await page.locator(locators.productPage.category)
    .getByTestId(locators.productPage.categoryClick).click();
  await page.getByTestId(locators.productPage.addToCart).click();
  await page.getByTestId(locators.productPage.productListingBtn).click();
  await page.getByTestId(locators.productPage.closeBtn).getByRole('button', { name: 'Close' }).click();

  // Step 4: Checkout
  await page.getByTestId(locators.checkoutPage.checkoutNav).click();
  await page.getByTestId(locators.checkoutPage.guestBtn).click();

  await page.getByTestId(locators.checkoutPage.fullNameInput).fill(testData.userDetails.fullName);
  await page.getByTestId(locators.checkoutPage.emailInput).fill(process.env.TEST_EMAIL);
  await page.getByTestId(locators.checkoutPage.phoneInput).fill(process.env.TEST_PHONE);

  await page.getByTestId(locators.checkoutPage.payBtn).click();

  // Step 5: Payment
  await page.getByTestId(locators.paymentPage.paytmOption).click();
  await page.getByTestId(locators.paymentPage.continuePaymentBtn).click();

  await page.goto(`${process.env.PAYMENT_URL}?mid=${process.env.PAYTM_MID}&orderId=d223183b-1e92-43e3-ae9f-4d1f34a3cd90`);
  await page.getByText('Net Banking').click();
  await page.getByRole('button', { name: 'PAY Rs188.71' }).click();
  await page.getByRole('button', { name: 'clr icon Successful' }).click();

  // Step 6: Confirmation
  await page.getByText(locators.confirmationPage.readyText).click();
  await page.getByText(locators.confirmationPage.confirmingText).click();
  await page.getByText(locators.confirmationPage.receivedText).click();
  await page.getByRole('button', { name: 'Close' }).click();

  // Step 7: Menu navigation
  await page.getByTestId(locators.confirmationPage.menuNav).click();
});
