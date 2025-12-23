import { test, expect } from '@playwright/test';
 test('test', async({page}) =>{


    await page.goto("https://in-uat.pwa.kfc.dev/"),
    //await page.goto("https://in-qa.pwa.kfc.dev/"),

    await page.getByTestId('start-order-button').click();
    await page.getByTestId('disposition-order-click-handler-Disposition - Delivery').click();
    await page.getByTestId('store-search-input').fill('nada');
    await page.getByText('Nadaun, Himachal Pradesh, India',{exact: true}).click();
   await page.waitForSelector("xpath=//button[normalize-space()='Confirm']");
    await page.locator("xpath=//button[normalize-space()='Confirm']").click();
    //await page.getByTestId('confirm-button-handler').click();
    await page.getByTestId('category-click-test').click();
    await page.getByTestId('add-to-cart-A-36152-0').click();
    await page.waitForSelector('button blackButton blackBorder delivery-confirm-button delivery-confirm-button-in').click({force:true});
 });