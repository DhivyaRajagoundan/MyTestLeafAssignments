import {test} from '@playwright/test'

test('Home Assignment PlaywrightLocators',async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main");
//await page.getByRole('textbox',{name:'Username'}).fill('Demosalesmanager');// Get By Role
await page.getByLabel('Username').fill('Demosalesmanager'); // Get By Label
await page.getByRole('textbox',{name:'Password'}).fill('crmsfa');
await page.getByRole('button',{name:'Login'}).click();
await page.getByText('CRM/SFA').click();
await page.getByRole('link',{name:'Leads'}).click();
await page.getByText('Create Lead').click();
// Relative Xpath
//Elder Cousin to Younger
//ElderCousinRelativeXpath[]/following::tagname(Younger)
await page.locator('//span[text()="Company Name"]/following::input[@id="createLeadForm_companyName"]').fill("testCompName");

//Younger to Elder Cousin
await page.locator('//span[text()="Last name"]/preceding::input[@id="createLeadForm_firstName"]').fill("testFirstName");

// Parent to Child
await page.locator('//td/input[@id="createLeadForm_lastName"]').fill("testLastName");

//GrandParent to GrandChild

await page.locator('//tr//input[@name="personalTitle"]').fill("Mrs");
await page.locator('//input[@name="generalProfTitle"]').fill("Quality Lead");
await page.locator('//input[@id="createLeadForm_annualRevenue"]').fill("890000");
await page.locator('//span[text()="Department"]/following::input[@name="departmentName"]').fill("Quality");
await page.selectOption('//select[@name="dataSourceId"]','LEAD_EMPLOYEE');
await page.locator('//select[@name="industryEnumId"]').selectOption("IND_SOFTWARE");
await page.locator('//select[@name="marketingCampaignId"]').selectOption({label:'Automobile'});
await page.locator('//select[@name="ownershipEnumId"]').selectOption({value:'OWN_SCORP'});
await page.locator('//select[@name="generalStateProvinceGeoId"]').selectOption({index:4});
await page.locator('//span[text()="Area Code"]/following::input[@name="primaryPhoneNumber"]').fill("9808768909");
await page.getByRole('button',{name:'Create Lead'}).click();
})