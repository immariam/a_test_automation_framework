# VoucherCodes Test Automation Framework

This repository contains automated tests for VoucherCodes' website's restaurant offers search functionality. 

Note: This framework serves as an example of a scalable test automation framework for web applications you might find useful :) 

## Testing Framework and Assertion Library

The tests are implemented using [WebdriverIO](https://webdriver.io/), a powerful and flexible automation testing framework that simplifies browser automation. 

### Assertion Library: WebdriverIO.Expect (Jest Extension)

[WebdriverIO.Expect]([https://webdriver.io/docs/api/expect.html](https://webdriver.io/docs/api/expect-webdriverio/#browser-matchers)) is the assertion library used in these tests. It is an extension of [Jest's](https://jestjs.io/) `expect` library, providing a rich set of assertion methods for validating the state of the application.

### Test Structure: Jasmine

[Jasmine](https://jasmine.github.io/) is used for structuring the test suites and cases. It is a behavior-driven development (BDD) testing framework for JavaScript that provides a clean and expressive syntax for defining and organizing tests.

## Setup

- Clone the repository using the SSH URL ([Using SSH keys with GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)).
- Install Homebrew on your system (if not already installed).
- Download and install nvm ([Instructions](https://github.com/nvm-sh/nvm)).
- Use `nvm`to install the latest stable Node version (like nvm install 18 && nvm alias default 18).
- Run `npm install` in the "voucherCodes_test_automation_framework" directory.

## Running the Tests

To run all tests:

`npm run wdio`

To run a single file:

`npm run wdio ./wdio.conf.js -- --spec ./test/specs/offerSearch.e2e.js`

## Debug Mode

WebdriverIO has a debug feature called browser.debug(). This pauses the test, converts the terminal into a JS-like REPL, and allows debugging commands.

Set a longer Jasmine timeout in `wdio.conf.ts` file to have more time for debugging. Remember to revert the change when debug mode is no longer needed.

## Test Reporting

This test automation framework uses Allure and Spec to generate reports for test results.

Spec creates a clear, easy-to-read test report in the console.

Allure generates JSON files in the allure-results directory for each test run. Use the command `allure generate --clean allure-results && allure open` to generate and open a report in the browser.

Note: Java must be installed on your system to generate the Allure report.

## Screenshots

Screenshots are automatically captured on test failures. They are saved in the errorShots directory with a timestamped filename, providing visual information for debugging purposes.

## Dynamic Data

Please note that, since the checks are performed on the actual VoucherCodes website with live production data, the search results can be dynamic. This means that the data may change, and the checks may not be accurate if the website content is updated.

## Test Coverage

The framework covers various scenarios related to searching for restaurant offers on the VoucherCodes website. Test cases include:

- A successful search with valid parameters.
- Intentional test failure to provide useful data for debugging.
