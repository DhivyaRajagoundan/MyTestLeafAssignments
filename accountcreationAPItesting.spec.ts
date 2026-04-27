import { test, expect } from "@playwright/test"
import dotenv from "dotenv"

let tokenType: any
let accessToken: any
let sfdc_link: any
let sfdc_id: any

//Reading Login details from Environment file

dotenv.config({ path: 'data/mysaleslogin.env' })
let clientId = process.env.MS_client_id
let clientSecret = process.env.MS_client_secret
let userName = process.env.MS_username
let password = process.env.MS_password

test.describe.serial("Creating Lead from Salesforce", async () => {
    test('Generate Token for Authentication', async ({ request }) => {

        let tokenResponse = await request.post("https://login.salesforce.com/services/oauth2/token",
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                form: {
                    "grant_type": "password",
                    "client_id": `${clientId}`,
                    "client_secret": `${clientSecret}`,
                    "username": `${userName}`,
                    "password": `${password}`

                }

            })

        let responseBody = await tokenResponse.json()
        console.log("Token Object Response", responseBody);

        //Getting the Token Type from responseObject
        tokenType = responseBody.token_type
        console.log("Token Type for Authorization", tokenType);

        accessToken = responseBody.access_token
        console.log("Authorization Token", accessToken);

        sfdc_link = responseBody.instance_url
        console.log(sfdc_link);

        let statusCode = tokenResponse.status()
        console.log("Status of the Token Generation", statusCode);
        expect(statusCode).toBe(200)

        let statusText = tokenResponse.statusText()
        console.log("Status Text of the Token Generation", statusText);
        expect(statusText).toBe("OK")

    })

    test('Creating an End Customer Account', async ({ request }) => {

        let createResponse = await request.post(`${sfdc_link}/services/data/v65.0/sobjects/Account`,

            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${tokenType} ${accessToken}`
                },
                data: {
                    "Name": "EndCustomer Name qqqqq"
                }

            })

        let acc_response = await createResponse.json()
        console.log("Account Object Response", acc_response);

        console.log(createResponse.status());
        console.log(createResponse.statusText());

        sfdc_id = acc_response.id
        console.log("SFDC ID", sfdc_id);



        expect(createResponse.status()).toBe(201)
        expect(createResponse.statusText()).toBe("Created")

    })

    test('Fetch End Customer Account', async ({ request }) => {

        let fetchResponse = await request.get(`${sfdc_link}/services/data/v65.0/sobjects/Account/${sfdc_id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${tokenType} ${accessToken}`

                }

            })

        let getResponse = await fetchResponse.json();
        console.log("Get Object Response", getResponse);

        let statusCode = fetchResponse.status();
        console.log("Status Code of Get Response", statusCode)
        expect(statusCode).toBe(200)

        let statusText = fetchResponse.statusText();
        console.log("Status Text of Get Response", statusText)
        expect(statusText).toBe("OK")

    })

    test('Updating End Customer Account', async ({ request }) => {

        let patchResponse = await request.patch(`${sfdc_link}/services/data/v65.0/sobjects/Account/${sfdc_id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${tokenType} ${accessToken}`
                },
                data: {
                    "Name": "Updating Name"
                }

            })
        let statusCode = patchResponse.status();
        console.log("Status Code of Update Record", statusCode);
        expect(statusCode).toBe(204)

        let statusText = patchResponse.statusText();
        console.log("Status Code of Update Record", statusText);
        expect(statusText).toBe("No Content")
    })

    test('Deleting the End Customer Account', async ({ request }) => {

        let deleteResponse = await request.delete(`${sfdc_link}/services/data/v65.0/sobjects/Account/${sfdc_id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${tokenType} ${accessToken}`
                }

            })
        let statusCode = deleteResponse.status();
        console.log("Status Code of Update Record", statusCode);
        expect(statusCode).toBe(204)

        let statusText = deleteResponse.statusText();
        console.log("Status Code of Update Record", statusText);
        expect(statusText).toBe("No Content")

    })

})