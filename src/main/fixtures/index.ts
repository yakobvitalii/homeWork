import { test as base } from "@playwright/test";
import { Checkout, Main, Review, Social } from "../pages";


type Fixtures = {
    mainPage: Main;
    reviewPage: Review;
    socialPage: Social;
    checkoutPage: Checkout;
};

export const test = base.extend<Fixtures>({
    mainPage: async ({ page }, use) => {
        const main = new Main(page, "/");
        await use(main);
    },
    reviewPage: async ({ page }, use) => {
        const review = new Review(page, "/cart.php?a=view");
        await use(review);
    },
    socialPage: async ({ page }, use) => {
        const social = new Social(page, "/store/socialbee");
        await use(social);
    },
    checkoutPage: async ({ page }, use) => {
        const checkout = new Checkout(page, "/cart.php?a=checkout&e=false");
        await use(checkout);
    },
});

export const expect = test.expect;