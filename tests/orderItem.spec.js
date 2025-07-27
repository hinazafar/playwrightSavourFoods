import { test, expect } from '@playwright/test';

test('Add to Cart', async ({ page }) => {
  await page.goto('https://order.savourfoods.com.pk/');
  await page.getByRole('combobox', { name: 'Select City / Region' }).click();
  await page.getByRole('option', { name: 'Lahore' }).click();
  await page.getByRole('combobox', { name: 'Select Area / Sub Region' }).click();
  await page.getByText('Airport', { exact: true }).click();
  await page.getByRole('button', { name: 'Select' }).click();
  await page.locator('button').filter({ hasText: 'Chicken Pulao' }).click();
  await page.getByRole('img', { name: 'Special', exact: true }).click();
  //await page.locator('input[name=":r3r:"]').check();
  //await page.getByLabel('Boxed').check();
  //await page.locator('label:has-text("Boxed") input[type="radio"]').check();
  //await page.locator('//span[contains(text(), "Boxed")]/preceding-sibling::span//input[@type="radio"]').check();

  //await page.locator('//label[.//span[contains(text(), "Boxed")]]').click();
  await page.locator('xpath=/html/body/div[2]/div[3]/div[2]/div/div[2]/div/div/div[1]/div/div/div/div[2]/div/div/div/div/div/div[2]/div/span/input').check();

  await page.getByRole('button', { name: 'Add To Cart' }).first().click();
  await page.getByRole('button', { name: 'Add To Cart' }).first().click();
  await page.getByText('Rs. 2,070.00 Add To Cart').click();
  //await page.locator('[aria-label="Add To Cart"]').click();
  //await page.getByTestId('ShoppingBagIcon').locator('path').click();
  await page.getByTestId('ShoppingBagIcon').click();
  await page.getByText('Checkout').click();
  
  await page.waitForTimeout(3000); // extra wait if needed
  await expect(page.getByText('Place Order')).toBeVisible(); //This assertion is validating the place order text is visible or not
  await page.waitForTimeout(5000);
});