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
    await page.getByTestId(locators.phonePeOption).locator('span').click();
    await page.getByTestId(locators.continueToPayment).click();

    // Payment
      await page.getByRole(locators.cardRadio.role, { name: locators.cardRadio.name }).check();
      await page.getByRole(locators.cardNumber.role, { name: locators.cardNumber.name }).fill(testData.Creditcard.number);
      await page.getByRole(locators.cardHolder.role, { name: locators.cardHolder.name }).fill(testData.Creditcard.holder);
      await page.getByRole(locators.expiryMonth.role, { name: locators.expiryMonth.name }).fill(testData.Creditcard.expiryMonth);
      await page.getByRole(locators.expiryYear.role, { name: locators.expiryYear.name }).fill(testData.Creditcard.expiryYear);
      await page.getByRole(locators.cvv.role, { name: locators.cvv.name }).fill(testData.Creditcard.cvv);
      await page.getByRole(locators.payNow.role, { name: locators.payNow.name }).click();
      await page.getByRole(locators.submit.role, { name: locators.submit.name }).click();

  // then wait for order-processing (app may take a few seconds)
await page.waitForURL('**/order-processing', { timeout: 50000, waitUntil: 'domcontentloaded'  });
expect(page.url()).toContain('/order-processing');

// finally wait for payment-success
await page.waitForURL('**/payment-success', { timeout: 50000, waitUntil: 'domcontentloaded'  });
expect(page.url()).toContain('/payment-success');

 // await page.goto('https://in-uat.pwa.kfc.dev/payment-success');
});