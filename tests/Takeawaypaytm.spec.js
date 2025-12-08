import { test, expect } from '@playwright/test';
import { locators } from '../pages/orderslocators.js';
import { testData } from '../data/testdata.js';

test('KFC Paytm Order Flow', async ({ page }) => {
  //localized
  await page.goto(testData.url);
  await page.getByTestId(locators.startOrderButton).click();
  await page.getByTestId(locators.pickupOption).click();
  await page.getByTestId(locators.storeSearchInput).fill(testData.paytmSearch);
  await page.getByText(testData.paytmstore, { exact: true }).click();
  await page.getByTestId(locators.searchStoreComponent)
    .locator('div')
    .filter({ hasText: 'KFC RBD Gachibowli0.9 kmdeliverydine-inPick upGround Floor, Survey No. 124,' })
    .getByTestId('order-now')
    .click();

  // Add Item
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
  // await page.getByTestId(locators.phonePeOption).locator('span').click();
  // await page.getByTestId(locators.continueToPayment).click();

  // Paytm Payment 

  await page.getByText(locators.PaytmPayment).click();
  await page.getByText(locators.continueToPayment).click();
  await page.getByRole(locators.payNow).click();
  await page.getByRole(locators.Paytmoption).click();
  await page.getByRole('button', { name: 'clr icon Successful' }).click();
  await page.getByText('READY IN JUST A SECOND.').click();
  await page.getByText('CONFIRMING YOUR ORDER.').click();
  await page.getByText('Your order has been received!').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByTestId('menu-name-Menu').click();


  // await page.locator('#category-name-CAT3467').getByTestId('category-click-test').click();
  // await page.getByTestId('add-to-cart-A-32069-0').click();
  // await page.getByTestId('product-listing-button').click();
  // await page.getByTestId('normal-icon').getByRole('button', { name: 'Close' }).click();
  // await page.getByTestId('navigation-checkout-desktop').click();
  // await page.getByTestId('continue-as-a-gust').click();
  // await page.getByTestId('Full Name-masktextlabel-id').click();
  // await page.getByTestId('enter-Full Name-details').press('CapsLock');
  // await page.getByTestId('enter-Full Name-details').fill('D');
  // await page.getByTestId('enter-Full Name-details').press('CapsLock');
  // await page.getByTestId('enter-Full Name-details').fill('Disha');
  // await page.getByTestId('email-masktextlabel-id').click();
  // await page.getByTestId('enter-email-details').fill('dbc3466@yum.com');
  // await page.getByTestId('phoneNumber-masktextlabel-id').click();
  // await page.getByTestId('enter-phoneNumber-details').fill('9163527676');
  // await page.getByTestId('pay-button').click();
  // await page.getByTestId('radio-label-paytm').click();
  // await page.getByTestId('continue-to-payment-btn').click();
  // //await page.goto('https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=RRUUJH75187222565310&orderId=d223183b-1e92-43e3-ae9f-4d1f34a3cd90');
  // await page.getByText('Net Banking').click();
  // await page.getByRole('button', { name: 'PAY Rs188.71' }).click();
  // await page.getByRole('button', { name: 'clr icon Successful' }).click();
  // await page.getByText('READY IN JUST A SECOND.').click();
  // await page.getByText('CONFIRMING YOUR ORDER.').click();
  // await page.getByText('Your order has been received!').click();
  // await page.getByRole('button', { name: 'Close' }).click();
  // await page.getByTestId('menu-name-Menu').click();
});