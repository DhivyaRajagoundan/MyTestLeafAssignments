import { test, expect } from "@playwright/test"

const userName = "admin"
const password = "sooM+H@w1P2P"
const loginDetails = `${userName}:${password}`
const userLogin = btoa(loginDetails);
console.log(userLogin);

let sysId: any;

test.describe.serial('Testing Change Request API - Playwright Intergration', async () => {

    // POST REQUEST
    test('Create a Change Request', async ({ request }) => {
        let changeRespone = await request.post("https://dev231684.service-now.com/api/now/table/change_request",

            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Basic ${userLogin}`

                },
                data: {
                    "description": "Creating Change Request from Playwright API"

                }
            })

        // Deserialization from JSON to Object
        let res = await changeRespone.json()
        console.log("Converting JSON to Object", res);

        //Asserting Status Code
        let changeStatus = changeRespone.status()
        console.log("Status of the Change Request", changeStatus);
        expect(changeStatus).toBe(201)

        // Asserting Status Text
        let changeText = changeRespone.statusText()
        console.log("Status Text of Change Request", changeText);
        expect(changeText).toBe("Created")

        // Change Request Number
        let changeId = res.result.number
        console.log("Change Request Number", changeId);

        // Fetching Sys Id for CURD operations   

        sysId = res.result.sys_id
        console.log("Printing Sys id", sysId);

    })

    // GET REQUEST
    test('Query the Change Request', async ({ request }) => {

        let fetchResponse = await request.get(`https://dev231684.service-now.com/api/now/table/change_request/${sysId}`,
            {
                headers: {
                    "Context-Type": "application/json",
                    "Authorization": `Basic ${userLogin}`
                }

            })

        let getResponse = await fetchResponse.json()
        console.log("JSON to Object Conversion", getResponse);

        let statusCode = fetchResponse.status()
        console.log("Status Code of the response", statusCode);
        expect(statusCode).toBe(200)

        let statusText = fetchResponse.statusText()
        console.log("Status Code of the responseText", statusText);
        expect(statusText).toBe("OK")

    })

    // PATCH REQUEST
    test('Update Change Request', async ({ request }) => {

        let updateResponse = await request.patch(`https://dev231684.service-now.com/api/now/table/change_request/${sysId}`,
            {
                headers:
                {
                    "Content-Type": "application/json",
                    "Authorization": `Basic ${userLogin}`
                },
                data: {
                    "comments": "Testing  Comments",
                    "implementation_plan": "testing plan"

                }

            })

        let patchResponse = await updateResponse.json();
        console.log("Patch Response", patchResponse);

        let statusCode = updateResponse.status()
        console.log("Status of the Patch Request", statusCode);
        expect(statusCode).toBe(200)

        let statusText = updateResponse.statusText();
        console.log("Status Text of the Patch Response", statusText);
        expect(statusText).toBe("OK")
    })

    //DELETE REQUEST
    test('Deleting the Change Request', async ({ request }) => {

        let deleteResponse = await request.delete(`https://dev231684.service-now.com/api/now/table/change_request/${sysId}`,

            {

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Basic ${userLogin}`
                }

            })

        /* let delres = await deleteResponse.json()
        console.log("Delete Record Response", delres); */

        let statusCode = deleteResponse.status()
        console.log("Status Code of Delete Request", statusCode);
        expect(statusCode).toBe(204)

        let statusText = deleteResponse.statusText()
        console.log("Status Text of Delete Request", statusText);
        expect(statusText).toBe("No Content")

    })

})