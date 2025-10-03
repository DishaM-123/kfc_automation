
const { test, expect } = require('@playwright/test');

test('KFC homepage loads successfully', async ({ page }) => {
  // Go to KFC home page
  await page.goto('https://in-qa.pwa.kfc.dev');

  // Wait until the title is visible
  await expect(page).toHaveTitle(/KFC/);
  await page.click('.account-container'); 
  await page.fill('#phoneNumberId','9163527676');
  
  await page.click('#btnSendCode');

  console.log('KFC homepage opened and verified successfully.');

  
  await page.locator('#codeBox0').pressSequentially('3572');

  await page.click('.expireText');

const submitBtn = page.locator('#submitBtn');
await expect(submitBtn).toBeEnabled({ timeout: 10000 });

//await expect(page.locator('#submitBtn')).toBeEnabled({ timeout: 5000 });

// Click once it’s enabled
await submitBtn.click();

console.log('OTP entered and submitted successfully.');

})