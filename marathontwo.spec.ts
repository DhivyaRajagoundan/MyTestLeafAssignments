import {expect, test} from "@playwright/test"

test.use({
    storageState: 'data/ServicenowLogin.json'
})

test('ServiceNow Service Catalog',async({page})=>{
await page.goto("https://dev280319.service-now.com/now/nav/ui/classic/params/target/ui_page.do%3Fsys_id%3D83aa5acb83c403100b92b1d6feaad32d");
await page.getByRole('menuitem',{name:'All'}).click();
await page.getByRole('link',{name:'Service Catalog 3 of 23'}).click();
const frame = page.frameLocator('#gsft_main');
await frame?.getByRole('link',{name:'Mobiles',exact:true}).click();
await frame?.getByRole('link',{name:'Apple iPhone 13 pro'}).click();
await frame?.locator("//span[@class='input-group-radio']/label[text()='Yes']").click();
await frame?.getByRole('textbox',{name:/What was the original phone number?/i}).fill("998876555")
await frame?.getByRole('combobox',{name:/Monthly data allowance/i}).selectOption({value:'unlimited'});
await frame?.locator("//span[@class='input-group-radio']/label[text()='Sierra Blue']").click();
await frame?.locator("//span[@class='input-group-radio']/label[text()='512 GB [add $300.00]']").click();
await frame?.getByRole('button',{name:'Order Now'}).click();
let confirmationMsg = await frame?.locator('//span[text()="Thank you, your request has been submitted"]').innerText();
expect(confirmationMsg).toBe("Thank you, your request has been submitted")
await frame?.getByRole('button',{name:/Close/i}).click();
await page.screenshot({ path: 'data/OrderPage.png', fullPage: true });

})