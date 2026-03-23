//CallBack Function to Handle Aysnchronous Tasks

let browser = "Chrome";
function checkBrowserVersion(CallBack){
setTimeout(cbTimeout,2000,browser)
}
function cbTimeout(browserType){
    browserVersion = navigator.userAgent;
    console.log("The Browser Version is ",browserVersion);
    console.log("Browser Type",browserType);

}
checkBrowserVersion("Chrome");