import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://in-uat.pwa.kfc.dev/');
  await page.getByTestId('start-order-button').click();
  await page.getByTestId('disposition-order-click-handler-Disposition - Pickup').click();
  await page.getByTestId('store-search-input').click();
  await page.getByTestId('store-search-input').press('CapsLock');
  await page.getByTestId('store-search-input').fill('N');
  await page.getByTestId('store-search-input').press('CapsLock');
  await page.getByTestId('store-search-input').fill('Nadau');
  await page.getByRole('option', { name: 'googleMapLocation Nadaun,' }).click();
  await page.getByTestId('searchstore-component').locator('div').filter({ hasText: 'Test Aloha0.4 kmdeliverydine-' }).getByTestId('order-now').click();
  await page.locator('#category-name-CAT3417').getByTestId('category-click-test').click();
  await page.getByTestId('add-to-cart-A-34662-43060').click();
  await page.getByTestId('normal-icon').getByRole('button', { name: 'Close' }).click();
  await page.getByTestId('navigation-checkout-desktop').click();
  await page.getByTestId('continue-as-a-gust').click();
  await page.getByTestId('Full Name-masktextlabel-id').click();
  await page.getByTestId('enter-Full Name-details').press('CapsLock');
  await page.getByTestId('enter-Full Name-details').fill('Disha');
  await page.getByTestId('email-masktextlabel-id').click();
  await page.getByTestId('enter-email-details').fill('dbc3466@yum.com');
  await page.getByTestId('phoneNumber-masktextlabel-id').click();
  await page.getByTestId('enter-phoneNumber-details').fill('9163527676');
  await page.getByTestId('pay-button').click();
  await page.getByTestId('radio-label-phonepe').locator('span').click();
  await page.getByTestId('continue-to-payment-btn').click();

  // choose UPI ID and enter value
  await page.getByRole('radio', { name: 'UPI ID' }).click();
  await page.getByRole('textbox', { name: 'UPI ID' }).fill('success');

  // verify button visibility and click
  const verifyLocator = page.locator('a', { hasText: /VERIFY UPI ID/ });
  await verifyLocator.waitFor({ state: 'visible', timeout: 10000 });
  await verifyLocator.click();

  // click PAY if needed (keeps original behavior)
  await page.getByRole('button', { name: /PAY/ }).click();

  // click onboarding submit and wait for success navigation (avoid race)
  await Promise.all([
    page.locator('#b2bOnboardingSubmitButton').click(),
    page.waitForURL('**/transact/**', { timeout: 15000 }),
  ]);

// then wait for order-processing (app may take a few seconds)
await page.waitForURL('**/order-processing', { timeout: 50000, waitUntil: 'domcontentloaded'  });
expect(page.url()).toContain('/order-processing');

// finally wait for payment-success
await page.waitForURL('**/payment-success', { timeout: 50000, waitUntil: 'domcontentloaded'  });
expect(page.url()).toContain('/payment-success');
});