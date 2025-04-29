import { BrowserContext, chromium, Page, test } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { MyInfoPage } from '../src/pages/MyInfoPage';
import { LogoutPage } from '../src/pages/LogoutPage';

test.describe("Orange HRM MyInfo @myInfo", () => {
    let context: BrowserContext;
    let page: Page;

    let loginPage: LoginPage;
    let myInfoPage: MyInfoPage;
    let logoutPage: LogoutPage;
    test.beforeAll(async ({ browser }) => {
        browser = await chromium.launch();
        context = await browser.newContext({
            recordVideo: {
                dir: `./test-results/videos/`,
                size: { width: 1418, height: 789 }
            }
        });
        await context.clearCookies();
        page = await context.newPage();

        loginPage = new LoginPage(page);
        myInfoPage = new MyInfoPage(page);
        logoutPage = new LogoutPage(page);
    });

    test.beforeEach(async ({ browser }, testInfo) => {
        await test.step('Navigate to login page', async () => {
            await loginPage.navigateToLoginPage();
        });

        await test.step('Login with credentials', async () => {
            await loginPage.login('Admin', 'admin123');
        });
    });

    test('Login, navigate to My Info, and Logout', async ({ browser }) => {
        await test.step('Navigate to My Info', async () => {
            await myInfoPage.navigateToMyInfo();
        });

        await test.step('Logout', async () => {
            await logoutPage.logout();
        });
    });
    test.afterEach(async ({ browser }, testInfo) => {
        // Capture the test execution results status after every test
        if (testInfo.status !== testInfo.expectedStatus)
            console.log(`${testInfo.title} did not run as expected!`);
    })

    test.afterAll(async ({ browser }, testInfo) => {
        await test.step('Close the all', async () => {
            await page.close();
            await context.close();
            await browser.close();
        });
    })
});


