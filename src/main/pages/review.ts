import { Page } from "@playwright/test";
import { ApplicationPage } from "../interfaces/ApplicationPage";
import { ReviewComponent } from "../components/review_components";

export class Review implements ApplicationPage {
    private readonly page: Page;
    private readonly baseURL: string;
    private readonly reviewComponent: ReviewComponent;

    constructor(page: Page, baseURL: string) {
        this.page = page;
        this.baseURL = baseURL;
        this.reviewComponent = new ReviewComponent(page);
    };

    public async open() {
        await this.page.goto(this.baseURL);
    };

    public review() {
        return this.reviewComponent;
    };
}
