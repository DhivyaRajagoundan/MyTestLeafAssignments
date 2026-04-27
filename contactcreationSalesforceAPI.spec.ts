import { test, expect } from "@playwright/test"
import dotenv from "dotenv"

dotenv.config({ path: 'data/mysaleslogin.env' })
const clientID = process.env.MS_client_id
const clientSecret = process.env.MS_client_secret
const userName = process.env.MS_username
const password = process.env.MS_password

let tokenType: any
let accessToken: any
let sfdc_url: any
let sfdc_id: any

test.describe.serial("Salesforce Contact Creation - Use Cases", async () => {
    test('Salesforce Authentication for Playwright API', async ({ request }) => {
        let tokenResponse = await request.post("https://login.salesforce.com/services/oauth2/token",
            {
                headers: {
                    "Content-type": "application/x-www-form-urlencoded"
                },
                form: {
                    "grant_type": "password",
                    "client_id": `${clientID}`,
                    "client_secret": `${clientSecret}`,
                    "username": `${userName}`,
                    "password": `${password}`

                }
            })

        let responseBody = await tokenResponse.json()
        console.log("Token Response", responseBody);

        tokenType = responseBody.token_type;
        console.log("Token Type", tokenType);

        accessToken = responseBody.access_token;
        console.log("Access Token Id", accessToken);

        sfdc_url = responseBody.instance_url
        console.log("Sandbox Login URL", sfdc_url);

        let statusCode = tokenResponse.status();
        console.log("Status Code", statusCode);
        expect(statusCode).toBe(200)

        let statusText = tokenResponse.statusText();
        console.log("Status Text", statusText);
        expect(statusText).toBe("OK")
    })


    test('Contact Creation using Salesforce API', async ({ request }) => {
        let createResponse = await request.post(`${sfdc_url}/services/data/v65.0/sobjects/Contact`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${tokenType} ${accessToken}`
                },
                data: {
                    "Salutation": "Mrs.",
                    "LastName": "TestingrwerwerwLast Name"
                }

            })
        let postResponse = await createResponse.json();
        console.log("Create Contact Response", postResponse);

        sfdc_id = postResponse.id
        console.log("Contact Id", sfdc_id);

        let statusCode = createResponse.status();
        console.log("Status Code", statusCode);
        expect(statusCode).toBe(201)

        let statusText = createResponse.statusText();
        console.log("Status Text", statusText);
        expect(statusText).toBe("Created")
    })

    test('Fetch Contact Information', async ({ request }) => {
        let fetchResponse = await request.get(`${sfdc_url}/services/data/v65.0/sobjects/Contact/${sfdc_id}`,

            {

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${tokenType} ${accessToken}`
                }
            })

        let getResponse = await fetchResponse.json();
        console.log("Get Request Object Response", getResponse);

        let statusCode = fetchResponse.status();
        console.log("Status Code", statusCode);
        expect(statusCode).toBe(200)

        let statusText = fetchResponse.statusText();
        console.log("Status Text", statusText);
        expect(statusText).toBe("OK")
    })

    test('Update Contact informartion', async ({ request }) => {
        let fetchResponse = await request.patch(`${sfdc_url}/services/data/v65.0/sobjects/Contact/${sfdc_id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${tokenType} ${accessToken}`
                },
                data:
                {
                    "Salutation": "Mr.",
                    "LastName": "erwerwer Name"
                }
            })
        let statusCode = fetchResponse.status();
        console.log("Status Code", statusCode);
        expect(statusCode).toBe(204)

        let statusText = fetchResponse.statusText();
        console.log("Status Text", statusText);
        expect(statusText).toBe("No Content")
    })

    test('Deleting Contact Information', async ({ request }) => {
        let deleteResponse = await request.delete(`${sfdc_url}/services/data/v65.0/sobjects/Contact/${sfdc_id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${tokenType} ${accessToken}`
                }

            })
        let statusCode = deleteResponse.status();
        console.log("Status Code", statusCode);
        expect(statusCode).toBe(204)

        let statusText = deleteResponse.statusText();
        console.log("Status Text", statusText);
        expect(statusText).toBe("No Content")

    })

})