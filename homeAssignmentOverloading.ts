class APIClient{
    //Signature
    sendRequest(endpoint:string):void;
    sendRequest(endpoint:string,requestBody?:string,requestStatus?:boolean):void

        //Implementation
     sendRequest(endpoint:string,requestBody?:string,requestStatus?:boolean):void{
        if(requestStatus===true){
            console.log("The End Point is"+  endpoint +"and" + requestBody +"is" +"and" + requestStatus);
            
        }
        else if(requestStatus===false)
            {
            console.log("The End Point is"+  endpoint +"and" +  requestBody);

        }
        else{
            console.log("The End Point is"+ endpoint )
        }
     }

    
}

let abstractObj = new APIClient();
abstractObj.sendRequest("Endpoint1")
abstractObj.sendRequest("EndPoint");