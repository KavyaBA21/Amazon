import { Page } from "playwright/test";

export class BrowserPage{
    private readonly page:Page;
    constructor(page:Page){
        this.page = page;
    }
    async browser():Promise <void>{
        let browser;
        const context = await browser.newContext();
        const pages = await context.pages();
        await pages[1].bringToFront();
        console.log("Test case Passed")
        console.log("Test case Passed")
        console.log("Test case Passed")
    }

    
}