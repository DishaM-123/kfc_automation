import { test, expect } from '@playwright/test';

test.use({
  geolocation: { latitude: 28.57984161376953, longitude: 77.44830322265625 },
  permissions: ['geolocation'],
});

test('test', async ({ page, context }) => {
  await page.goto('https://in-qa.pwa.kfc.dev/');

  await page.locator('#startOrderItemButton').click();
  await page
    .getByTestId('disposition-order-click-handler-Disposition - Delivery')
    .click({ timeout: 80000 });

  // You can update geolocation later if needed
  await context.setGeolocation({
    latitude: 31.6090965,
    longitude: 76.56968439950813,
  });
   await page.getByTestId('use-my-location').click();
   const confirmButton = page.getByTestId('btn-confirm');
  await confirmButton.waitFor({ state: 'visible' });
  await confirmButton.click();

const deliveryComponent = page.getByTestId('delivery-component');
  await deliveryComponent.waitFor({ state: 'visible' });
  const closeButton = deliveryComponent.getByRole('button', { name: 'Close' });
  await closeButton.waitFor({ state: 'visible' });
  await closeButton.click();
  // Now click final confirm
  const finalConfirm = page.getByTestId('confirm-button-handler');
  await finalConfirm.waitFor({ state: 'visible' });
  await finalConfirm.click();

  // Check if modal or expected element appeared
  const expectedElement = page.getByTestId('delivery-component'); // adjust if different
  const isVisible = await expectedElement.isVisible();

  //Click again if needed
  if (!isVisible) {
    await confirmButton.dblclick();
  }
  await page.getByTestId('delivery-component').getByRole('button', { name: 'Close' }).dblclick();
 await page.getByTestId('confirm-button-handler').click();
//   await page.locator('#category-name-CAT158').getByTestId('category-click-test').click();
//   await page.locator('add-to-cart-A-32050-0').click();
//   await page.getByRole('button', { name: 'Close' }).click();
//   await page.getByTestId('navigation-checkout-desktop').click();
//   await page.getByTestId('address-field').click();
//   await page.getByTestId('address-field').fill('4444');
//   await page.getByTestId('continue-as-a-gust').click();
//   await page.getByTestId('Full Name-masktextlabel-id').click();
//   await page.getByTestId('enter-Full Name-details').press('CapsLock');
//   await page.getByTestId('enter-Full Name-details').fill('D');
//   await page.getByTestId('enter-Full Name-details').press('CapsLock');
//   await page.getByTestId('enter-Full Name-details').fill('Disha');
//   await page.getByTestId('email-masktextlabel-id').click();
//   await page.getByTestId('enter-email-details').fill('disha@test.com');
//   await page.getByTestId('phoneNumber-masktextlabel-id').click();
//   await page.getByTestId('enter-phoneNumber-details').fill('9163527676');
//   await page.getByTestId('pay-button').click();
//   await page.locator('div:nth-child(3) > .payment-option-header').click();
//   await page.getByTestId('continue-to-payment-btn').click();
  

});
