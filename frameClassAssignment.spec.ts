import {expect, test} from '@playwright/test'

test('Handling Frames',async({page})=>{

await page.goto("https://www.leafground.com/frame.xhtml");

//Frame count in the page
let frameCount = page.frames();
let count = frameCount.length;
console.log("No Of Frames in the Page",count);
const frameref = page.frame('frame2');
let buttonText = await frameref?.locator('#Click').textContent();
console.log("Before Clicking the Button inside Nested Frame",`${buttonText}`);
expect.soft(buttonText).toBe("Click Me");
frameref?.locator('#click').click();
let buttonTextAfter = await frameref?.getByRole('button',{name:'Hurray! You Clicked Me.'})?.textContent();
console.log("After Clicking the Button inside Nested Frame",`${buttonTextAfter}`);
expect.soft(buttonTextAfter).toBe("Hurray! You Clicked Me.");
})