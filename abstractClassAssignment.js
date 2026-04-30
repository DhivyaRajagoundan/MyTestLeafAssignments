"use strict";
class Assignment {
    fill() {
        console.log("Fill Method is Implemented");
    }
    clear() {
        console.log("Clear Method is Impleneted");
    }
}
class childClass extends Assignment {
    locator() {
        console.log("Locatore Method");
    }
    frame() {
        console.log("Frame Method");
    }
}
let childObjec = new childClass();
childObjec.fill();
childObjec.clear();
childObjec.frame();
childObjec.locator();
