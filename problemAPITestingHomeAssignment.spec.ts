import { test, expect } from "@playwright/test"
import dotenv from 'dotenv'
import { request } from "node:http"

//Reading Login details from Environment file
dotenv.config({ path: 'data/servicenowLogin.env' })
const userName = process.env.SN_userName
const password = process.env.SN_password
const login = `${userName}:${password}`
const userDetails = btoa(login)

let sys_ID: any

test.describe.serial('Creating Problem Ticket in Service Now', async () => {
    // POST Request for creating Problem
    test('Creating Problem', async ({ request }) => {

        let getResponse = await request.post("https://dev231684.service-now.com/api/now/table/problem",
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Basic ${userDetails}`
                },
                data: {
                    "description": "Testing problem from Playwright API"
                }

            })

        let createResponse = await getResponse.json()
        console.log("Problem Creation Response as Object", createResponse);

        let problemStatus = getResponse.status();
        console.log("Problem Creation Status Code", problemStatus);
        expect(problemStatus).toBe(201)

        let problemText = getResponse.statusText();
        console.log("Problem Creation Text", problemText);
        expect(problemText).toBe("Created")

        sys_ID = createResponse.result.sys_id
        console.log("Query Id", sys_ID);

    })

    test('Fetching the Problem Request', async ({ request }) => {

        let queryResponse = await request.get(`https://dev231684.service-now.com/api/now/table/problem/${sys_ID}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Basic ${userDetails}`
                }

            })

        let getResponse = await queryResponse.json()
        console.log("Get Response in Object Format", getResponse);

        let statusCode = queryResponse.status()
        console.log("Status Code", statusCode);
        expect(statusCode).toBe(200)

        let statusText = queryResponse.statusText()
        console.log("Status Text", statusText);
        expect(statusText).toBe("OK")
    })

    test('Updating Problem Record', async ({ request }) => {

        let updateResponse = await request.patch(`https://dev231684.service-now.com/api/now/table/problem/${sys_ID}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Basic ${userDetails}`
                },
                data: {
                    "description": " Updatig Testing problem",
                    "escalation": "2",
                    "fix_by": "Dhivya",
                    "work_notes": "Working on the Problem"
                }

            })

        let patchResponse = await updateResponse.json()
        console.log("Update Record Object Response", patchResponse);

        let statusCode = updateResponse.status()
        console.log("Status Code", statusCode);
        expect(statusCode).toBe(200)

        let statusText = updateResponse.statusText()
        console.log("Status Text", statusText);
        expect(statusText).toBe("OK")

    })

    test('Deleting Problem Record', async ({ request }) => {

        let deleteResponse = await request.delete(`https://dev231684.service-now.com/api/now/table/problem/${sys_ID}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Basic ${userDetails}`
                }

            })

        let statusCode = deleteResponse.status()
        console.log("Status Code", statusCode);
        expect(statusCode).toBe(204)

        let statusText = deleteResponse.statusText()
        console.log("Status Text", statusText);
        expect(statusText).toBe("No Content")
    })

})