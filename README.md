# Playwright Automation Framework — JavaScript (Lite, free)

A clean, scalable starting point for test automation with **Playwright + JavaScript**: Page Object Model, UI and API example tests, reusable fixtures, an API client, and a set of helper utilities. MIT licensed — use it however you like.

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Node](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)
![License: MIT](https://img.shields.io/badge/license-MIT-green)

## What's inside

- 🧱 Page Object Model with a `PageFactory` (selectors kept in `locators.js`, out of page logic)
- 🖱️ UI sample tests and 🔌 API sample tests (with a reusable `APIClient` + a custom `apiClient` fixture)
- 🧰 Helper modules: assertions, browser actions, data generators, dates, files, strings, validation, waits, logging, test helpers
- 📊 Playwright HTML report, traces/screenshots/video on failure, retries, parallel execution, cross-browser projects
- 🌱 `.env` support via `dotenv`
- ⚙️ GitHub Actions CI workflow

## Quick start

```bash
npm install                 # also downloads Playwright browsers (postinstall)
cp .env.example .env        # Windows: copy .env.example .env
npm test
npm run report              # open the HTML report
```

Useful scripts:

```bash
npm run test:ui        # UI tests only
npm run test:api       # API tests only
npm run test:chrome    # headed Google Chrome
npm run test:chromium  # npm run test:firefox / test:webkit
npm run test:headed | test:headless
npm run test:ui-mode | test:debug
```

## Structure

```
src/
  pages/        basePage, loginPage, secureAreaPage, pageFactory, locators
  tests/ui/     UI tests (Page Object Model)
  tests/api/    API tests (fixtures + APIClient)
  utils/        env loader, fixtures, apiClient + helper modules
.github/workflows/ci.yml
playwright.config.js
```

## Environment

Copy `.env.example` → `.env` and edit:

```env
BASE_URL=https://the-internet.herokuapp.com
API_BASE_URL=https://jsonplaceholder.typicode.com
PLAYWRIGHT_REPORT_DIR=playwright-report
PW_HEADLESS=true
PW_BROWSER=chromium
```

`PW_BROWSER` selects a single browser project; leave it unset to run all four.

---

## ⭐ Upgrade to the Pro Kit

This Lite edition is the foundation. The **Pro Kit** turns it into a production-ready setup so you don't spend days on plumbing:

- 🌍 Multi-environment config (`TEST_ENV=dev|staging|prod`)
- 🔐 Auth fixture with `storageState` reuse — tests start already logged in (faster suites)
- 📈 Allure reporting (alongside HTML), JUnit on CI, **Slack/Teams failure notifications**
- 🐳 Docker + docker-compose for clean, reproducible runs
- ⚙️ Real GitHub Actions pipeline — sharding matrix, artifact uploads, manual environment picker
- 🖼️ Visual regression example and a combined API + UI E2E example
- ✨ ESLint (+ `eslint-plugin-playwright`) + Prettier + Husky pre-commit
- 📚 Full docs + a setup video; commercial license for unlimited client/work projects

👉 **Get the Pro Kit:** https://ajnalkarismail.gumroad.com/l/fqkbl

---

## License

MIT — see [`LICENSE`](LICENSE). Stars and PRs welcome. If your team needs help wiring automation into your product, reach out.
