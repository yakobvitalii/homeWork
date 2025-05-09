import { expect, Locator, Page } from '@playwright/test';
import { Products } from '../constants/products';

export class HomeComponents {
  readonly page: Page;
  readonly homeLogo: Locator;
  readonly price: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeLogo = page.locator('.logo-img');
  };

  getProductCard(title: string): Locator {
    return this.page.locator(`div.card:has(h3:text("${title}"))`);
  };

  async open() {
    await this.page.goto('/');
  };

  async verifyLogoVisible() {
    await expect(this.homeLogo).toBeVisible();
  };

  async browseProduct(title: string) {
    const productCard = this.getProductCard(title);
    await productCard.waitFor({ state: 'visible' });
    await productCard.getByRole('link', { name: Products.BROWSE_PRODUCT }).click();
  };
}