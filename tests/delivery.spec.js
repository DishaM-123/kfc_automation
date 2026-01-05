import { test, expect } from '@playwright/test';
 test('test', async({page}) =>{
 
 
    //await page.goto("https://in-uat.pwa.kfc.dev/"),
    await page.goto("https://in-qa.pwa.kfc.dev/"),
 
    await page.getByTestId('start-order-button').click();
    await page.getByTestId('disposition-order-click-handler-Disposition - Delivery').click();
    await page.getByTestId('store-search-input').fill('nada');
    await page.getByText('Nadaun, Himachal Pradesh, India').click();
    // await page.waitForLoadState('networkidle'); 
    const btn = page.getByTestId('btn-confirm');
await btn.scrollIntoViewIfNeeded();
await btn.click({ force: true });


// const btnConfirm = page.getByTestId('btn-confirm');
// await btnConfirm.waitFor({ state: 'visible' });
// await expect(btnConfirm).toBeEnabled();
// await btnConfirm.click();  // this will now work

//await page.getByTestId('confirm-button-handler').click();
// await page.locator("xpath=//button[normalize-space()='Confirm']").click();
    await page.getByTestId('confirm-button-handler').click();
    // await page.getByTestId('category-click-test').click();
    // await page.getByTestId('add-to-cart-A-36152-0').click();
    // await page.waitForSelector('button blackButton blackBorder delivery-confirm-button delivery-confirm-button-in').click({force:true});
 });