// Assignment Two Edit Leads

import { test } from '@playwright/test'


test('Week2 Day3 Assignment 2 Edit Lead Field',async({page})=>{
    
await page.goto("http://leaftaps.com/opentaps/control/main");
await page.locator('//input[@name="USERNAME"]').fill("Demosalesmanager");
await page.locator('//input[contains(@id,"password")]').fill("crmsfa");
await page.click('//input[@class="decorativeSubmit"]');
await page.click('//a[contains(text(),"CRM")]');
await page.click('a:has-text("Leads")');
await page.click('//a[contains(text(),"Create Lead")]');
await page.locator('//input[@id="createLeadForm_companyName"]').fill("Logistics Pvt Ltd");
await page.locator('(//input[@name="firstName"])[3]').fill("Dhivya");
await page.locator('(//input[@name="lastName"])[3]').fill("Rajagoundan");
await page.click('//input[@class="smallSubmit"]');
await page.click('a:has-text("Edit")');
await page.locator('//input[@id="updateLeadForm_companyName"]').fill("Updated Company Name");
await page.click('//input[@value="Update"]');
})
 


    test('Assignment 1 Create Lead', async ({ page }) => {
    await page.goto("https://login.salesforce.com/");
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('input[id="password"]').fill('TestLeaf@2025');
    await page.locator('#Login').click();
    await page.waitForTimeout(12000);
    await page.click('//button[@title="App Launcher"]');
    await page.click('//button[@aria-label="View All Applications"]');
    await page.click('//p[text()="Sales"]');
    await page.click('//a[@title="Leads"]');
    await page.click('//div[@title="New"]');
    await page.click('//button[@name="salutation"]');
    await page.locator('[role="option"]', { hasText: 'Mrs.' }).click();
    const leadName = "Test Lead";
    await page.locator('//input[@name="lastName"]').fill(`${leadName}`);
    console.log("Lead Name", `${leadName}`);
    await page.locator('//input[@name="Company"]').fill("Testcompany");
    //await page.locator('[title="App Launcher"]').click()
    await page.click('//button[@name="SaveEdit"]');
    await page.waitForTimeout(5000);
    //const hasText = await page.locator(`text='${leadName}'`).innerText();
    const hasText = await page.locator(`//div[@title,'${leadName}']`).innerText();
    //a[contains(@title,'Test Lead')]
     if(hasText===`${leadName}`){
        console.log("Lead Text is visible");
    }
    else{
        console.log("Lead Text is not visible");
        
    }   
}) 
 


test('Week 2 Day 3 Assignment 3',async({page})=>{
await page.goto("https://login.salesforce.com/");
await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
await page.locator('input[id="password"]').fill('TestLeaf@2025');
await page.locator('#Login').click();
await page.waitForTimeout(12000);
await page.click('//button[@title="App Launcher"]');
await page.click('//button[@aria-label="View All Applications"]');
await page.click('//p[text()="Individuals"]');
await page.click('//button[@title="Select a List View: Individuals"]');
await page.click('//div[@title="New"]');
const lastName = "lastnametest";
await page.locator('//input[@placeholder="Last Name"]').fill(`${lastName}`);
await page.click('//span[text()="Save"]');
/*const text = await page.locator(`//div[@title='${lastName}']`).innerText();
console.log(text)
if(text===`${lastName}`){
        console.log("Individual is created");

}else{
    console.log("Individual is not created");
}  */
}) 

 test('Week 2 Day 3 Edit Individual Fields',async({page})=>{
await page.goto("https://login.salesforce.com/");
await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
await page.locator('input[id="password"]').fill('TestLeaf@2025');
await page.locator('#Login').click();
await page.waitForTimeout(12000);
await page.click('//span[text()="More"]');
await page.click('(//span[text()="Individuals"])[2]')
await page.click('//div[@title="New"]');
const lastName = "lastnametest";
await page.locator('//input[@placeholder="Last Name"]').fill(`${lastName}`);
await page.click('//span[text()="Save"]');
/// have to continue after learning search

})
 