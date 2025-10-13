import { test, expect } from '@playwright/test';

test('test', async ({ page, context}) => {
     test.setTimeout(120000);
  await page.goto('https://in-uat.pwa.kfc.dev/',
  {waitUntil: 'domcontentloaded',
    timeout: 6000});
  await page.getByTestId('start-order-button').click();
  await page.getByTestId('disposition-order-click-handler-Disposition - Dine in').click();
  await page.getByTestId('store-search-input').click();
  await page.getByTestId('store-search-input').fill('gach');
  await page.getByText('Gachibowli, Hyderabad, Telangana, India', { exact: true }).click();
  await page.getByTestId('searchstore-component').locator('div').filter({ hasText: 'KFC RBD Gachibowli0.9 kmdeliverydine-inPick upGround Floor, Survey No. 124,' }).getByTestId('order-now').click();
  await page.locator('#category-name-CAT158').getByTestId('category-click-test').click();
  await page.locator('#category-name-CAT3418').getByTestId('category-click-test').click();
  await page.getByTestId('add-to-cart-A-35899-43914').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByTestId('navigation-checkout-desktop').click();
  await page.getByTestId('ptr-children-id').locator('div').filter({ hasText: 'CheckoutSecure CheckoutDINE' }).nth(2).click();
  await page.getByTestId('continue-as-a-gust').click();
  await page.locator('body').click();
  await page.getByTestId('enter-Full Name-details').fill('arpana');
  await page.getByTestId('enter-Full Name-details').click();
  await page.getByTestId('enter-email-details').fill('agg4740@yum.com');
  await page.getByTestId('enter-email-details').click();
  await page.getByTestId('enter-phoneNumber-details').fill('9473895074');
  await page.getByTestId('enter-phoneNumber-details').click();
  await page.getByTestId('enter- marketingOptIn-details').click();
  await page.getByTestId('pay-button').click();
  await page.locator('body').click();
  await page.locator('.payment-option').first().click();
  await page.getByTestId('radio-label-paytm').click();

  await page.getByTestId('continue-to-payment-btn').click()

  //await page.goto('https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage')
  await page.getByText('Net Banking').click();
   //await paytmPage.getByRole('button', { name: /PAY/i }).click();
   await page.getByRole('button', { name: 'PAY Rs125.47' }).click();
  await page.getByRole('button', { name: 'clr icon Successful' }).click();
  await page.getByText('READY IN JUST A SECOND.').click();
  await page.getByText('CONFIRMING YOUR ORDER.').click();
  await page.getByText('Your order has been received!').click();
  await page.getByRole('button', { name: 'Close' }).click();
  });