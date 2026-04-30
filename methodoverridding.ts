class Browser {

    browserVersion() {

        console.log("What is the Browser version");

    }
}

class Chrome extends Browser {

    browserVersion(): void {
        console.log("The Version of the Browser is 30.2");

    }
}

let childObj = new Chrome();
childObj.browserVersion();