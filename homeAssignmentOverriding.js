"use strict";
class BasePage {
    findElement() {
        console.log("Method Finding Element");
    }
    clickElement() {
        console.log("Method Click Element");
    }
    enterText() {
        console.log("Enter Text Method");
    }
    performCommanTask() {
        console.log("Performing Comman Task Method in Base Class");
    }
}
class LoginPage extends BasePage {
    performCommanTask() {
        console.log("PEforming Task in Sub Class");
        super.performCommanTask();
    }
}
let ChildObject = new LoginPage();
ChildObject.clickElement();
ChildObject.findElement;
ChildObject.enterText;
ChildObject.performCommanTask();
