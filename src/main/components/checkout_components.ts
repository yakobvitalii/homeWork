import { expect, Locator, Page } from '@playwright/test';
import { Section } from '../constants/checkoutSection';

export class CheckoutComponents {
    readonly page: Page;
    readonly completeOrder:Locator;
    readonly priceMoutnhly:Locator;
    readonly checkoutCard:Locator

    constructor(page: Page) {
        this.page = page;
        this.checkoutCard = page.locator('#order-standard_cart')
        this.priceMoutnhly = page.locator("//td[text()='Monthly']/following-sibling::td[2]")
        this.completeOrder = page.locator('#btnCompleteOrder')

    };

    sectionSelector(section: string): Locator {
        return this.page.locator(`span:has-text("${section}")`) ;
    };

    async checkMounthlyPrice(price) {
        await this.checkoutCard.waitFor({ state: 'visible' });
        const product = await this.priceMoutnhly.innerText();
        expect(product).toEqual(price);
    };

    async verifyFormSectionsVisible() {
        const requiredSections = [
            Section.PERSONAL_INFORMATION,
            Section.BILLING_ADDRESS,
            Section.ACCOUNT_SECURITY,
            Section.TERMS_AND_CONDITIONS,
            Section.PAYMENT_DETAILS
        ];
        for (const section of requiredSections) {
            await expect(this.sectionSelector(section)).toBeVisible();
        }
    };

    async completeOrderButton() {
        const complete = this.completeOrder
        await expect(complete).toBeDisabled();
    };
}