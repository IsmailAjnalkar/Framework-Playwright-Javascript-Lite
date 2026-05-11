// Browser-specific utilities for Playwright automation.
class BrowserHelpers {
  // Wait for page to be fully loaded
  static async waitForPageLoad(page) {
    await page.waitForLoadState('networkidle');
  }

  // Wait for element to be visible and stable
  static async waitForElementStable(page, selector, timeout = 10000) {
    await page.waitForSelector(selector, { state: 'visible', timeout });
    await page.waitForFunction(
      (sel) => {
        const element = document.querySelector(sel);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      },
      selector,
      { timeout: 5000 }
    );
  }

  // Scroll element into view smoothly
  static async scrollIntoView(page, selector) {
    await page.locator(selector).scrollIntoViewIfNeeded();
  }

  // Get element bounding box
  static async getBoundingBox(page, selector) {
    return await page.locator(selector).boundingBox();
  }

  // Check if element is in viewport
  static async isInViewport(page, selector) {
    return await page.locator(selector).isVisible();
  }

  // Get page title
  static async getPageTitle(page) {
    return await page.title();
  }

  // Get current URL
  static async getCurrentUrl(page) {
    return page.url();
  }

  // Navigate back
  static async goBack(page) {
    await page.goBack();
  }

  // Navigate forward
  static async goForward(page) {
    await page.goForward();
  }

  // Refresh page
  static async refreshPage(page) {
    await page.reload();
  }

  // Clear browser storage
  static async clearStorage(page) {
    await page.context().clearCookies();
    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
  }

  // Set viewport size
  static async setViewportSize(page, width, height) {
    await page.setViewportSize({ width, height });
  }

  // Get viewport size
  static async getViewportSize(page) {
    return page.viewportSize();
  }

  // Take full page screenshot
  static async takeFullPageScreenshot(page, fileName) {
    await page.screenshot({ path: fileName, fullPage: true });
  }

  // Take element screenshot
  static async takeElementScreenshot(page, selector, fileName) {
    const element = page.locator(selector);
    await element.screenshot({ path: fileName });
  }

  // Get page source
  static async getPageSource(page) {
    return await page.content();
  }

  // Execute JavaScript in page context
  static async executeScript(page, script, ...args) {
    return await page.evaluate(script, ...args);
  }

  // Wait for network requests to complete
  static async waitForNetworkIdle(page, timeout = 10000) {
    await page.waitForLoadState('networkidle', { timeout });
  }

  // Mock network response
  static async mockResponse(page, url, responseData) {
    await page.route(url, (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(responseData)
      });
    });
  }

  // Block network requests
  static async blockRequests(page, patterns) {
    await page.route(patterns, (route) => route.abort());
  }

  // Set user agent
  static async setUserAgent(page, userAgent) {
    await page.setExtraHTTPHeaders({ 'User-Agent': userAgent });
  }

  // Get browser console logs
  static async getConsoleLogs(page) {
    const logs = [];
    page.on('console', (msg) => {
      logs.push(msg.text());
    });
    return logs;
  }

  // Handle dialog (alert, confirm, prompt)
  static async handleDialog(page, accept = true, promptText) {
    page.on('dialog', async (dialog) => {
      if (promptText && dialog.type() === 'prompt') {
        await dialog.accept(promptText);
      } else if (accept) {
        await dialog.accept();
      } else {
        await dialog.dismiss();
      }
    });
  }

  // Wait for file download
  static async waitForDownload(page, timeout = 30000) {
    return await page.waitForEvent('download', { timeout });
  }

  // Upload file
  static async uploadFile(page, selector, filePath) {
    const fileInput = page.locator(selector);
    await fileInput.setInputFiles(filePath);
  }

  // Get element attribute
  static async getElementAttribute(page, selector, attribute) {
    return await page.locator(selector).getAttribute(attribute);
  }

  // Set element attribute
  static async setElementAttribute(page, selector, attribute, value) {
    await page.locator(selector).setAttribute(attribute, value);
  }

  // Get element text content
  static async getElementText(page, selector) {
    return await page.locator(selector).textContent();
  }

  // Get element inner HTML
  static async getElementHTML(page, selector) {
    return await page.locator(selector).innerHTML();
  }

  // Get element outer HTML
  static async getElementOuterHTML(page, selector) {
    return await page.locator(selector).evaluate((el) => el.outerHTML);
  }

  // Check if element exists
  static async elementExists(page, selector) {
    return (await page.locator(selector).count()) > 0;
  }

  // Get elements count
  static async getElementsCount(page, selector) {
    return await page.locator(selector).count();
  }

  // Get all elements text
  static async getAllElementsText(page, selector) {
    return await page.locator(selector).allTextContents();
  }

  // Click element with retry
  static async clickWithRetry(page, selector, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
      try {
        await page.locator(selector).click();
        return;
      } catch (error) {
        if (i === maxRetries - 1) throw error;
        // eslint-disable-next-line playwright/no-wait-for-timeout
        await page.waitForTimeout(1000);
      }
    }
  }

  // Type text with clear first
  static async typeWithClear(page, selector, text) {
    const element = page.locator(selector);
    await element.clear();
    await element.type(text);
  }

  // Select dropdown option by value
  static async selectByValue(page, selector, value) {
    await page.locator(selector).selectOption({ value });
  }

  // Select dropdown option by label
  static async selectByLabel(page, selector, label) {
    await page.locator(selector).selectOption({ label });
  }

  // Get selected option value
  static async getSelectedValue(page, selector) {
    return await page.locator(selector).inputValue();
  }

  // Check checkbox/radio
  static async checkElement(page, selector) {
    await page.locator(selector).check();
  }

  // Uncheck checkbox
  static async uncheckElement(page, selector) {
    await page.locator(selector).uncheck();
  }

  // Check if element is checked
  static async isElementChecked(page, selector) {
    return await page.locator(selector).isChecked();
  }

  // Focus element
  static async focusElement(page, selector) {
    await page.locator(selector).focus();
  }

  // Hover element
  static async hoverElement(page, selector) {
    await page.locator(selector).hover();
  }

  // Double click element
  static async doubleClickElement(page, selector) {
    await page.locator(selector).dblclick();
  }

  // Right click element
  static async rightClickElement(page, selector) {
    await page.locator(selector).click({ button: 'right' });
  }

  // Drag and drop
  static async dragAndDrop(page, fromSelector, toSelector) {
    await page.locator(fromSelector).dragTo(page.locator(toSelector));
  }

  // Press key
  static async pressKey(page, key) {
    await page.keyboard.press(key);
  }

  // Type text
  static async typeText(page, text) {
    await page.keyboard.type(text);
  }

  // Get page cookies
  static async getCookies(page) {
    return await page.context().cookies();
  }

  // Set cookie
  static async setCookie(page, name, value, domain) {
    await page.context().addCookies([{ name, value, domain, path: '/' }]);
  }

  // Delete cookie
  static async deleteCookie(page, name, domain) {
    await page.context().addCookies([{ name, value: '', domain, path: '/', expires: 0 }]);
  }

  // Get local storage item
  static async getLocalStorageItem(page, key) {
    return await page.evaluate((k) => localStorage.getItem(k), key);
  }

  // Set local storage item
  static async setLocalStorageItem(page, key, value) {
    await page.evaluate(([k, v]) => localStorage.setItem(k, v), [key, value]);
  }

  // Get session storage item
  static async getSessionStorageItem(page, key) {
    return await page.evaluate((k) => sessionStorage.getItem(k), key);
  }

  // Set session storage item
  static async setSessionStorageItem(page, key, value) {
    await page.evaluate(([k, v]) => sessionStorage.setItem(k, v), [key, value]);
  }

  // Set geolocation
  static async setGeolocation(page, latitude, longitude) {
    await page.context().setGeolocation({ latitude, longitude });
  }

  // Grant permissions
  static async grantPermissions(page, permissions) {
    await page.context().grantPermissions(permissions);
  }

  // Clear permissions
  static async clearPermissions(page) {
    await page.context().clearPermissions();
  }

  // Emulate device
  static async emulateDevice(page, deviceName) {
    const { devices } = require('playwright');
    const device = devices[deviceName];
    if (device) {
      await page.setViewportSize(device.viewport);
      await page.setExtraHTTPHeaders(device.extraHTTPHeaders || {});
    }
  }

  // Set network conditions (placeholder — wire up CDP throttling per your needs)
  // eslint-disable-next-line no-unused-vars
  static async setNetworkConditions(page, download, upload, latency) {
    await page.context().setOffline(false);
    // Note: real throttling needs a CDP session (Chromium):
    //   const cdp = await page.context().newCDPSession(page);
    //   await cdp.send('Network.emulateNetworkConditions', { offline: false, downloadThroughput: download, uploadThroughput: upload, latency });
  }

  // Get performance metrics
  static async getPerformanceMetrics(page) {
    return await page.evaluate(() => {
      const perfData = performance.getEntriesByType('navigation')[0];
      return {
        domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
        loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
        totalTime: perfData.loadEventEnd - perfData.fetchStart
      };
    });
  }

  // Get page load time
  static async getPageLoadTime(page) {
    return await page.evaluate(() => {
      const [navigation] = performance.getEntriesByType('navigation');
      return navigation.loadEventEnd - navigation.fetchStart;
    });
  }
}

module.exports = { BrowserHelpers };
