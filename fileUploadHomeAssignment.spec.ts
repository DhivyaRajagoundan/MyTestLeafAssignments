import {test,expect} from '@playwright/test'


test('Uploading Files - Home Assignment',async({page})=>{
await page.goto("https://login.salesforce.com/");
await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
await page.locator('input[id="password"]').fill('TestLeaf@2025');
await page.getByRole('button',{name:'Log In'}).click();
await page.getByRole('button',{name:'App Launcher'}).click();
await page.getByRole('button',{name:'View All Applications'}).click();
await page.getByPlaceholder("Search apps or items...").fill("Accounts");
await page.locator('//a[@title="Accounts"]').click();
//await page.getByRole('link',{name:'Accounts',exact:true}).click();
await page.locator('//div[@title="New"]').click();
let accountName = "Uploading Test File";
await page.getByRole('textbox',{name:'Account Name'}).fill(`${accountName}`);
await page.getByRole('combobox',{name:'Type'}).click();
await page.locator("//span[@title='Prospect']").click();
await page.getByRole('combobox',{name:'Industry'}).click();
await page.getByRole('option',{name:'Banking'}).click();
await page.getByRole('button',{name:'Save',exact:true}).click();
await expect(page.locator('.toastMessage')).toHaveText(/Account.*was created/i);
const fileupload1=page.getByRole('button',{name:'Upload Files Or drop files'})
await fileupload1.setInputFiles(['UserDef/W4_D1_Checkbox.pdf','UserDef/Create_Lead.pdf']);
await page.waitForTimeout(2000) 


})