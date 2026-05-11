// Custom Playwright fixtures extend the built-in test object with API support.
const base = require('@playwright/test');
const { APIClient } = require('./apiClient');

const test = base.test.extend({
  // apiBaseUrl is a shared fixture that provides the base URL for API tests.
  apiBaseUrl: [process.env.API_BASE_URL ?? 'https://jsonplaceholder.typicode.com', { scope: 'test' }],

  // apiClient is a reusable fixture built from the Playwright request context.
  apiClient: async ({ apiBaseUrl, request }, use) => {
    const client = new APIClient(request, apiBaseUrl);
    await use(client);
  }
});

module.exports = { test, expect: base.expect };
