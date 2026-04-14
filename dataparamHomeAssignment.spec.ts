import { expect, test } from '@playwright/test'
//import testdata from "../data/leaftap.json"
import {parse} from "csv-parse/sync"
import fs from 'fs'
import path from 'path'

let value:any = parse(fs.readFileSync("data/testleaftap.csv"),{columns:true,skip_empty_lines:true})

let testdata = value[0]
test(`Data Parma Home Assignment ${testdata.TestCaseID}`, async ({ page }) => {
   await page.goto(testdata.URL);
   await page.getByRole('textbox', { name: 'Username' }).fill(testdata.UserName);
   await page.getByRole('textbox', { name: 'Password' }).fill(testdata.Password);
   await page.getByRole('button', { name: 'Login' }).click();
   await page.getByRole('link', { name: 'CRM/SFA' }).click();
   await page.getByRole('link', { name: 'Leads' }).click();
   await page.getByRole('link', { name: 'Create Lead' }).click();
   await page.locator('//input[@id="createLeadForm_companyName"]').fill(testdata.CompanyName);
   await page.locator('//input[@id="createLeadForm_firstName"]').fill(testdata.FirstName);
   await page.locator('//input[@id="createLeadForm_lastName"]').fill(testdata.LastName)
   await page.locator('#createLeadForm_dataSourceId').selectOption(testdata.Source);
   await page.selectOption('#createLeadForm_marketingCampaignId', testdata.MarketingCampingId);
   let marketingValuesCnt = page.locator("//select[@id='createLeadForm_marketingCampaignId']/option");
   let dropDownCount = await marketingValuesCnt.count();
   console.log(`No of values in Marketing Dropdown ${dropDownCount}`);
   for (let i = 0; i < dropDownCount; i++) {
      console.log(await marketingValuesCnt.nth(i).innerText());
   }
   await page.selectOption('#createLeadForm_industryEnumId', testdata.Industry);
   await page.selectOption('#createLeadForm_currencyUomId', testdata.Currency);
   await page.selectOption('#createLeadForm_generalCountryGeoId', testdata.Country);
   await page.selectOption('#createLeadForm_generalStateProvinceGeoId', testdata.State);
   let stateValues = page.locator("//select[@id='createLeadForm_generalStateProvinceGeoId']/option");
   let stateCount = await stateValues.count();
   for (let i = 0; i < stateCount; i++) {
      console.log(await stateValues.nth(i).innerText());

   }
   await page.locator('//input[@name="submitButton"]').click();
   let leadpageTitle = await page.title();
   console.log(leadpageTitle);
})
