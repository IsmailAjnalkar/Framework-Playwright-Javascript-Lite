// BasePage provides shared page-level helpers used across all page objects.
const fs = require('fs');
const path = require('path');

class BasePage {
  constructor(page, testInfo) {
    this.page = page;
    this.testInfo = testInfo;
    const reportDir = process.env.PLAYWRIGHT_REPORT_DIR ?? 'playwright-report';
    this.screenshotDir = path.resolve(process.cwd(), reportDir, 'screenshots');
  }

  // Navigate to a relative or absolute URL path.
  async goto(targetPath) {
    await this.page.goto(targetPath);
  }

  // Wait until the page's DOM content has finished loading.
  async waitForLoad() {
    await this.page.waitForLoadState('domcontentloaded');
  }

  // Capture a screenshot for a specific logical step and attach it to the Playwright report.
  async takeStepScreenshot(stepName) {
    const safeName = stepName.replace(/[^a-zA-Z0-9-_]/g, '_');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `${safeName}-${timestamp}.png`;
    const screenshotPath = path.join(this.screenshotDir, filename);

    await fs.promises.mkdir(this.screenshotDir, { recursive: true });
    const screenshotBuffer = await this.page.screenshot({ path: screenshotPath, fullPage: true });

    if (this.testInfo) {
      await this.testInfo.attach(stepName, {
        body: screenshotBuffer,
        contentType: 'image/png'
      });
    }
  }
}

module.exports = { BasePage };
