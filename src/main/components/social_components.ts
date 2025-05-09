import { Locator, Page } from '@playwright/test';
import { Products } from '../constants/products';

export class SocialComponents {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    };

    productNameSelector(productName: string): Locator {
        return this.page.locator(`div.product:has(span:text("${productName}"))`) ;
    };

    async orderProduct(productName: string) {
        const socialProduct = this.productNameSelector(productName);
        await socialProduct.waitFor({ state: 'visible' });
        await socialProduct.getByRole('link', { name: Products.ORDER_NOW }).click();
    };
}