import { Price } from '../src/main/constants/price';
import { Products } from '../src/main/constants/products';
import { test } from '../src/main/fixtures';

test("Automate Product and Addon Addition to Cart", async (
  {
    mainPage, 
    reviewPage, 
    checkoutPage, 
    socialPage 
  }) => {
  
  await test.step("Open main page", async () => {
    await mainPage.open();
  });

  await test.step(`Browse product '${Products.SOCIAL_BEE}'`, async () => {
    const home = mainPage.home();
    await home.browseProduct(Products.SOCIAL_BEE);
  });

  await test.step(`Continue to Checkout with '${Products.ACCELERATE}'`, async () => {
    const social = socialPage.social();
    await social.orderProduct(Products.ACCELERATE);
  });

  await test.step("Verify Product and Price", async () => {
    const review = reviewPage.review();
    await review.checkAddedItem(Products.ACCELERATE);
    await review.checkPrice(Price.ACCELERATE);
  });

  await test.step("Proceed to Checkout", async () => {
    const review = reviewPage.review();
    await review.checkoutNext();
  });

  await test.step("Verify Checkout Information", async () => {
    const checkout = checkoutPage.checkout();
    await checkout.checkMounthlyPrice(Price.MOUNTHLY);
    await checkout.verifyFormSectionsVisible();
    await checkout.completeOrderButton();
  });

});
