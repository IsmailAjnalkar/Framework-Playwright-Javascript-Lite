// Custom wait utilities for handling timing and synchronization in tests.
class WaitHelpers {
  // Wait for a specific amount of time
  static async waitForTimeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Wait for an element to be visible with custom timeout
  static async waitForElementVisible(page, selector, timeout = 5000) {
    await page.waitForSelector(selector, { state: 'visible', timeout });
  }

  // Wait for an element to be hidden
  static async waitForElementHidden(page, selector, timeout = 5000) {
    await page.waitForSelector(selector, { state: 'hidden', timeout });
  }

  // Wait for text content to appear in an element
  static async waitForTextContent(locator, text, timeout = 5000) {
    await locator.waitFor({ state: 'visible', timeout });
    await locator.waitFor({ timeout });
    const content = await locator.textContent();
    if (!content?.includes(text)) {
      throw new Error(`Text "${text}" not found in element within ${timeout}ms`);
    }
  }

  // Wait for a function to return true
  static async waitForCondition(condition, timeout = 5000, interval = 100) {
    const startTime = Date.now();
    while (Date.now() - startTime < timeout) {
      if (await condition()) {
        return;
      }
      await this.waitForTimeout(interval);
    }
    throw new Error(`Condition not met within ${timeout}ms`);
  }

  // Wait for page to be fully loaded
  static async waitForPageLoad(page, timeout = 30000) {
    await page.waitForLoadState('domcontentloaded', { timeout });
    await page.waitForLoadState('networkidle', { timeout });
  }

  // Wait for network requests to complete
  static async waitForNetworkIdle(page, timeout = 10000) {
    await page.waitForLoadState('networkidle', { timeout });
  }

  // Retry a function until it succeeds or max attempts reached
  static async retry(fn, maxAttempts = 3, delay = 1000) {
    let lastError;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        return await fn();
      } catch (error) {
        lastError = error;
        if (attempt < maxAttempts) {
          await this.waitForTimeout(delay);
        }
      }
    }
    throw lastError;
  }
}

module.exports = { WaitHelpers };
