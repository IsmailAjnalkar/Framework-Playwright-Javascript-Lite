// Page object model for the secure area / logged-in landing page.
// Contains actions and element accessors for the secure area screen.
const { BasePage } = require('./basePage');
const { locators } = require('./locators');

class SecureAreaPage extends BasePage {
  constructor(page, testInfo) {
    super(page, testInfo);
    this.header = page.locator(locators.secureAreaPage.header);
    this.logoutButton = page.locator(locators.secureAreaPage.logoutButton);
  }

  async isVisible() {
    return this.header.isVisible();
  }

  async getHeaderText() {
    return this.header.textContent();
  }

  // Click the logout button and capture a final screenshot of the action.
  async logout() {
    await this.logoutButton.click();
    await this.takeStepScreenshot('secure-area-logout');
  }
}

module.exports = { SecureAreaPage };
