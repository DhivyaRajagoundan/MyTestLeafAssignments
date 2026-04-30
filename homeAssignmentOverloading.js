"use strict";
class APIClient {
    //Implementation
    sendRequest(endpoint, requestBody, requestStatus) {
        if (requestStatus === true) {
            console.log("The End Point is" + endpoint + "and" + requestBody + "is" + "and" + requestStatus);
        }
        else if (requestStatus === false) {
            console.log("The End Point is" + endpoint + "and" + requestBody);
        }
        else {
            console.log("The End Point is" + endpoint);
        }
    }
}
let abstractObj = new APIClient();
abstractObj.sendRequest("Endpoint1");
abstractObj.sendRequest("EndPoint");
