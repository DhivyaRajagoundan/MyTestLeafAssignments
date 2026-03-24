import { test,chromium,webkit} from '@playwright/test'

test('Launching RedBus from Edge Browser', async()=>{

const browser = await chromium.launch({channel:'msedge'});
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.redbus.in/");
//await page.waitForTimeout(3000);
let pageURL =  page.url();
console.log("RedBus Page URL",pageURL);
let pageTitle = await page.title();
console.log("RedBus Page Title",pageTitle);
})

test('Launching Flipkart from Wedkit Browser',async()=>{
                  
    const browser = await webkit.launch();
    const context = await browser.newContext();
    const page    = await context.newPage();
    await page.goto("https://www.flipkart.com/");
    //await page.waitForTimeout(3000);
    let pageURL = page.url();
    console.log("Flipkart Page URL",pageURL);
    let pageTitle = await page.title();
    console.log("Flipekart Page Title",pageTitle);

})