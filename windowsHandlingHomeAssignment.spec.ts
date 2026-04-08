import { test } from '@playwright/test'

test('Window Handling Home Assignment', async ({ page, context }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.getByRole('textbox', { name: 'Username' }).fill("Demosalesmanager");
    await page.getByRole('textbox', { name: 'Password' }).fill("crmsfa");
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'CRM/SFA' }).click();
    await page.getByRole('link', { name: 'Leads' }).click();
    await page.getByRole('link', { name: 'Merge Leads' }).click();

    const [childPage] = await Promise.all([context.waitForEvent('page'), page.getByRole('img', { name: 'Lookup' }).first().click()]);
    await childPage.locator("//a[text()='10008']").click();

    const [childPageOne] = await Promise.all([context.waitForEvent('page'), page.getByRole('img', { name: 'Lookup' }).nth(1).click()]);
    await childPageOne.locator("//a[text()='10009']").click();

    page.on('dialog', async (alert) => {
        await alert.accept();
    })
    await page.locator('//a[@class="buttonDangerous"]').click();
    await page.waitForTimeout(3000);

    let pageTitle = await page.title();
    console.log("The Title of the View Lead Page", `${pageTitle}`);

})