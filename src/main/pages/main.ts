import { Page } from "@playwright/test";
import { ApplicationPage } from "../interfaces/ApplicationPage";
import { HomeComponents } from "../components/home_page_components";

export class Main implements ApplicationPage {
  private readonly page: Page;
  private readonly baseURL: string;
  private readonly homeComponents: HomeComponents;

  constructor(page: Page, baseURL: string) {
    this.page = page;
    this.baseURL = baseURL;
    this.homeComponents = new HomeComponents(page);
  };

  public async open() {
    await this.page.goto(this.baseURL);
  };

  public home() {
    return this.homeComponents;
  };

}
