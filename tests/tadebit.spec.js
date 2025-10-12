import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://in-uat.pwa.kfc.dev/');
  await page.getByTestId('start-order-button').click();
  await page.getByTestId('disposition-order-click-handler-Disposition - Pickup').click();
  await page.getByTestId('store-search-input').click();
  await page.getByTestId('store-search-input').fill('nadau');
  await page.getByText('Nadaun, Himachal Pradesh, India', { exact: true }).click();
  await page.getByTestId('searchstore-component').locator('div').filter({ hasText: 'Test Aloha0.4 kmdeliverydine-' }).getByTestId('order-now').click();
  await page.locator('#category-name-CAT3417').getByTestId('category-click-test').click();
  await page.getByTestId('add-to-cart-A-31537-41075').click();
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

  await page.getByRole('radio', { name: 'Card' }).check();
  await page.getByRole('textbox', { name: 'Enter your card number' }).click();
  await page.getByRole('textbox', { name: 'Enter your card number' }).fill('4208585190116667');
  await page.getByRole('textbox', { name: 'Enter card holder’s full name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter card holder’s full name' }).fill('C');
  await page.getByRole('textbox', { name: 'Enter card holder’s full name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter card holder’s full name' }).fill('Credit ');
  await page.getByRole('textbox', { name: 'Enter card holder’s full name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter card holder’s full name' }).fill('Debit C');
  await page.getByRole('textbox', { name: 'Enter card holder’s full name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter card holder’s full name' }).fill('Credit Card');
  await page.getByRole('textbox', { name: 'MM' }).click();
  await page.getByRole('textbox', { name: 'MM' }).fill('06');
  await page.getByRole('textbox', { name: 'YY' }).fill('27');
  await page.getByRole('textbox', { name: 'CVV' }).fill('508');
  await page.getByRole('button', { name: 'PAY ₹' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  // then wait for order-processing (app may take a few seconds)
await page.waitForURL('**/order-processing', { timeout: 50000, waitUntil: 'domcontentloaded'  });
expect(page.url()).toContain('/order-processing');

// finally wait for payment-success
await page.waitForURL('**/payment-success', { timeout: 50000, waitUntil: 'domcontentloaded'  });
expect(page.url()).toContain('/payment-success');

 // await page.goto('https://in-uat.pwa.kfc.dev/payment-success');
});