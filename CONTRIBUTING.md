# Contributing

Thanks for your interest! This is the free **Lite** edition of the Playwright/JavaScript framework.

## Setup

```bash
git clone <repo-url>
cd Framework-Playwright-Javascript-Lite
npm install                 # downloads Playwright browsers via postinstall
cp .env.example .env        # Windows: copy .env.example .env
npm test
```

## Running tests

```bash
npm test                                  # everything
npm run test:ui | test:api                # a slice
npx playwright test src/tests/ui/login.spec.js
npx playwright test src/tests/ui/login.spec.js --grep "should log in successfully"
npm run test:chromium | test:chrome | test:firefox | test:webkit
npm run test:headed | test:headless | test:ui-mode | test:debug
npm run report                            # open the HTML report
```

## Conventions

- Page objects extend `BasePage`; keep selectors in `src/pages/locators.js`; expose pages from `PageFactory`.
- UI tests use the POM; API tests use the `apiClient` fixture from `src/utils/fixtures.js`.
- Add reusable helpers to the relevant module in `src/utils/`.
- Don't commit `.env` or the report folders.

## PRs

1. Branch: `git checkout -b feature/<short-name>`
2. Run the relevant tests.
3. Keep test titles descriptive.

For multi-environment config, auth/session reuse, Allure, Docker, a sharded CI pipeline, lint/format gates, and more, see the Pro Kit (link in the README).
