import { Page } from "@playwright/test";
import { ApplicationPage } from "../interfaces/ApplicationPage";
import { CheckoutComponents } from "../components/checkout_components";

export class Checkout implements ApplicationPage {
    private readonly page: Page;
    private readonly baseURL: string;
    private readonly checkoutComponent: CheckoutComponents;

    constructor(page: Page, baseURL: string) {
        this.page = page;
        this.baseURL = baseURL;
        this.checkoutComponent = new CheckoutComponents(page);
    };

    public async open() {
        await this.page.goto(this.baseURL);
    };

    public checkout() {
        return this.checkoutComponent;
    };
}
