import { expect, Locator, Page } from '@playwright/test';

export class ReviewComponent {
    readonly page: Page;
    readonly cart: Locator;
    readonly productItem: Locator;
    readonly productPrice:Locator;
    readonly subtotal:Locator;
    readonly checkout:Locator;
   
    constructor(page: Page) {
        this.page = page;
        this.cart = page.locator(`[id='order-standard_cart']`);
        this.productItem = page.locator(`[class=item-title]`);
        this.productPrice = page.locator(`[class*=item-price]>span:first-child`);;
        this.subtotal = page.locator(`#subtotal`);
        this.checkout = page.locator(`#checkout`);
    };

    async checkAddedItem(item:string) {
        await this.cart.waitFor({state: 'visible'});
        await expect(this.productItem).toContainText(item);
    };

    async checkPrice(price:string) {
        const product = await this.productPrice.innerText();
        expect(product).toEqual(price);
        const subtotalPrice = await this.subtotal.innerText();
        expect(subtotalPrice).toEqual(price);
    };

    async checkoutNext() {
        await this.checkout.click();
    };
}