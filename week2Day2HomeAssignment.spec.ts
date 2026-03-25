import {test} from '@playwright/test'

test('Week2DayHomeAssignment - Lead Creation',async({page})=>{

  await page.goto("http://leaftaps.com/opentaps/control/main");
  await page.locator('#username').fill('Demosalesmanager');
  await page.locator('[name="PASSWORD"]').fill('crmsfa');
  await page.locator('.decorativeSubmit').click();
  await page.locator('text=CRM/SFA').click();
  await page.locator('a:has-text("Leads")').click();
  await page.locator('//a[text()="Create Lead"]').click();
  await page.locator('#createLeadForm_companyName').fill('MyCompany');   
  await page.locator('#createLeadForm_firstName').fill('Dhivya');   
  await page.locator('#createLeadForm_lastName').fill('RajaGoudan');  
  await page.locator('#createLeadForm_personalTitle').fill('Mrs');  
  await page.locator('#createLeadForm_generalProfTitle').fill('Principal QA Engineer');  
  await page.locator('#createLeadForm_annualRevenue').fill('50000');  
  await page.locator('#createLeadForm_departmentName').fill('Quality Engineering');  
  await page.locator('#createLeadForm_primaryPhoneNumber').fill('9977654389'); 
  await page.locator('input[name="submitButton"]').click();
})