// Centralized selector definitions for all page objects.
// This keeps locator strings separated from page implementation details.
const locators = {
  loginPage: {
    usernameInput: '#username',
    passwordInput: '#password',
    loginButton: 'button[type="submit"]',
    flashMessage: '#flash'
  },
  secureAreaPage: {
    header: '.example h2',
    logoutButton: 'a.button'
  }
};

module.exports = { locators };
