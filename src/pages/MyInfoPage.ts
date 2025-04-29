import { Page } from '@playwright/test';

export class MyInfoPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToMyInfo() {
    await this.page.click("//span[text()='My Info']");
  }
}
