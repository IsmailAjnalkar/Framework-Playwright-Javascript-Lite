// Custom assertion utilities for enhanced test validation.
const { expect } = require('@playwright/test');

class AssertionHelpers {
  // Assert that an element contains specific text
  static async assertElementContainsText(locator, expectedText) {
    await expect(locator).toContainText(expectedText);
  }

  // Assert that an element has exact text
  static async assertElementHasText(locator, expectedText) {
    await expect(locator).toHaveText(expectedText);
  }

  // Assert that an element is visible
  static async assertElementVisible(locator) {
    await expect(locator).toBeVisible();
  }

  // Assert that an element is hidden
  static async assertElementHidden(locator) {
    await expect(locator).toBeHidden();
  }

  // Assert that an element has a specific attribute value
  static async assertElementHasAttribute(locator, attribute, value) {
    await expect(locator).toHaveAttribute(attribute, value);
  }

  // Assert that a page has a specific title
  static async assertPageTitle(page, expectedTitle) {
    await expect(page).toHaveTitle(expectedTitle);
  }

  // Assert that a page URL contains specific text
  static async assertPageURLContains(page, expectedURLPart) {
    await expect(page).toHaveURL(new RegExp(expectedURLPart));
  }

  // Assert that an element count matches expected number
  static async assertElementCount(locator, expectedCount) {
    await expect(locator).toHaveCount(expectedCount);
  }

  // Assert that a checkbox is checked
  static async assertCheckboxChecked(locator) {
    await expect(locator).toBeChecked();
  }

  // Assert that a checkbox is unchecked
  static async assertCheckboxUnchecked(locator) {
    await expect(locator).not.toBeChecked();
  }

  // Assert that an element has a specific CSS class
  static async assertElementHasClass(locator, className) {
    await expect(locator).toHaveClass(new RegExp(className));
  }

  // Assert that an element's value matches expected value
  static async assertElementValue(locator, expectedValue) {
    await expect(locator).toHaveValue(expectedValue);
  }

  // Assert that an element is enabled
  static async assertElementEnabled(locator) {
    await expect(locator).toBeEnabled();
  }

  // Assert that an element is disabled
  static async assertElementDisabled(locator) {
    await expect(locator).toBeDisabled();
  }

  // Custom assertion for API response status
  static assertResponseStatus(response, expectedStatus) {
    expect(response.status()).toBe(expectedStatus);
  }

  // Custom assertion for API response JSON structure
  static assertResponseJsonStructure(response, expectedKeys) {
    const jsonData = response.json();
    expectedKeys.forEach((key) => {
      expect(jsonData).toHaveProperty(key);
    });
  }

  // Assert that a number is within a range
  static assertNumberInRange(actual, min, max) {
    expect(actual).toBeGreaterThanOrEqual(min);
    expect(actual).toBeLessThanOrEqual(max);
  }

  // Assert that an array contains specific items
  static assertArrayContains(array, expectedItems) {
    expectedItems.forEach((item) => {
      expect(array).toContain(item);
    });
  }

  // Assert that a string matches a regex pattern
  static assertStringMatchesPattern(text, pattern) {
    expect(text).toMatch(pattern);
  }
}

module.exports = { AssertionHelpers };
