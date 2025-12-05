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
});