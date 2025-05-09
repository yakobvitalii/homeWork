import { Page } from "@playwright/test";
import { ApplicationPage } from "../interfaces/ApplicationPage";
import { SocialComponents } from "../components/social_components";

export class Social implements ApplicationPage {
    private readonly page: Page;
    private readonly baseURL: string;
    private readonly socialComponents: SocialComponents;

    constructor(page: Page, baseURL: string) {
        this.page = page;
        this.baseURL = baseURL;
        this.socialComponents = new SocialComponents(page);
    };

    public async open() {
        await this.page.goto(this.baseURL);
    };

    public social() {
        return this.socialComponents;
    };
}
