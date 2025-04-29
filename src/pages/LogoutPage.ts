import { Page } from '@playwright/test';

export class LogoutPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async logout() {
    await this.page.click("span[class='oxd-userdropdown-tab']");
    await this.page.click("//a[text()='Logout']");
  }
}
