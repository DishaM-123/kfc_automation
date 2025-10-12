import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://in-uat.pwa.kfc.dev/');
  await page.getByTestId('listItems-component-Gift Card').click();
  await page.getByRole('button', { name: '1000₹' }).click();
  await page.getByText('Recipient Email*').click();
  await page.getByTestId('recept-email').fill('dbc3466@yum.com');
  await page.getByText('Your Name*').click();
  await page.getByTestId('recept-email').press('CapsLock');
  await page.getByTestId('user-name').fill('D');
  await page.getByTestId('user-name').press('CapsLock');
  await page.getByTestId('user-name').fill('Disha');
  await page.getByText('Your Email*').click();
  await page.getByTestId('user-email').fill('dbc3466@yum.com');
  await page.getByText('Your Phone Number*').click();
  await page.getByTestId('user-phone').fill('9163527676');
  await page.getByTestId('payment-button').click();
  await page.getByRole('link', { name: 'Internet Banking' }).click();
  await page.locator('#txtBankIDBK').selectOption('123-DIRECT');
  await page.getByRole('button', { name: 'Make Payment' }).click();
  //await page.goto('https://uat.billdesk.com/pgidsk/pgijsp/banksimulator.jsp');
  await page.locator('#BankStatus').selectOption('Y-1');
  await page.getByRole('button', { name: 'Submit' }).click();
});