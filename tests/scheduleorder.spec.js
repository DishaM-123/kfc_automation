import { test, expect } from '@playwright/test';
 test('test', async({page}) =>{


    await page.goto("https://in-uat.pwa.kfc.dev/");
    await page.getByTestId('start-order-button').click();
    await page.getByTestId('disposition-order-click-handler-Disposition - Pickup').click();
    await page.getByTestId('store-search-input').click();
    await page.getByTestId('store-search-input').fill('Nadau');
    await page.getByText('Nadaun, Himachal Pradesh, India', { exact: true }).click();
    await page.getByTestId('searchstore-component').locator('div').filter({ hasText: 'Test Aloha0.4 kmdeliverydine-' }).getByTestId('schedule-order').click();
    await page.getByTestId('time-input-handler').click();
    //await page.getByText('6:00 PM').click();
    // wait until dropdown list is visible
await page.waitForSelector('.schedule-time-list-container li');

// wait for all items to be rendered
await page.waitForLoadState('networkidle');

// now click your time
await page.locator('.schedule-time-list-container li', { hasText: '4:45 PM' }).first().click();

// verify selected value did not revert to ASAP
await expect(page.getByText('4:45 PM')).toBeVisible();

    await page.getByTestId('confirm-button-handler').click();
    await page.locator('#category-name-CAT3659').getByTestId('category-click-test').click();
  

 });