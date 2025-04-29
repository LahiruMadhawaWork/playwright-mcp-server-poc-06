# Playwright MCP Server POC

## Overview
This project is a proof of concept (POC) for testing the OrangeHRM application using Playwright. It demonstrates the use of Playwright for end-to-end testing with a focus on modularity and maintainability through the use of Page Object Models (POM).

## Features
- Automated login to the OrangeHRM application.
- Navigation to the "My Info" section.
- Logout functionality.
- Video recording of test executions.
- Detailed test reporting.

## Project Structure
```
.
├── LICENSE
├── package.json
├── playwright.config.ts
├── playwright-report/
├── src/
│   └── pages/
│       ├── LoginPage.ts
│       ├── LogoutPage.ts
│       └── MyInfoPage.ts
├── test-results/
│   └── videos/
├── tests/
│   └── loginAndLogout.spec.ts
```

### Key Directories
- **`src/pages`**: Contains Page Object Model (POM) classes for different pages of the application.
- **`tests`**: Contains test scripts written using Playwright.
- **`playwright-report`**: Stores the HTML reports generated after test execution.
- **`test-results`**: Stores videos and screenshots of test executions.

## Prerequisites
- Node.js (v14 or later)
- Playwright installed globally or locally in the project

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd playwright-mcp-server-poc-06
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Running Tests
To execute the tests, run:
```bash
npm run test
```

### Viewing Reports
To view the test execution report, run:
```bash
npm run report
```

### Test Details
- **Login**: Logs into the OrangeHRM application using the provided credentials.
- **Navigate to My Info**: Navigates to the "My Info" section of the application.
- **Logout**: Logs out of the application.

## Scripts
- **`test`**: Executes all Playwright tests.
- **`report`**: Opens the Playwright HTML report.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Author
Lahiru Madhawa
