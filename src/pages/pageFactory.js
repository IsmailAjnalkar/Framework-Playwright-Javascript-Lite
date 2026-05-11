// PageFactory centralizes page object construction to keep tests clean.
const { LoginPage } = require('./loginPage');
const { SecureAreaPage } = require('./secureAreaPage');

class PageFactory {
  static login(page, testInfo) {
    return new LoginPage(page, testInfo);
  }

  static secureArea(page, testInfo) {
    return new SecureAreaPage(page, testInfo);
  }
}

module.exports = { PageFactory };
