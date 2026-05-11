// UI test examples using the Page Object Model and Playwright test runner.
const { test, expect } = require('@playwright/test');
const { PageFactory } = require('../../pages/pageFactory');

test.describe('Login UI tests', () => {
  test('should log in successfully with valid credentials', async ({ page }, testInfo) => {
    const loginPage = PageFactory.login(page, testInfo);
    const secureArea = PageFactory.secureArea(page, testInfo);

    await loginPage.goto();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    await expect(secureArea.header).toBeVisible();
    await expect(secureArea.header).toHaveText('Secure Area');
  });

  test('should display an error message for invalid credentials', async ({ page }, testInfo) => {
    const loginPage = PageFactory.login(page, testInfo);

    await loginPage.goto();
    await loginPage.login('invalid', 'invalid');

    await expect(loginPage.flashMessage).toContainText('Your username is invalid!');
  });
});
