abstract class Assignment{

    fill(){
        console.log("Fill Method is Implemented");
        
    }
    clear(){
        console.log("Clear Method is Impleneted");
        
    }

    abstract locator():void
    abstract frame():void
}

class childClass extends Assignment{

locator(): void {
    
    console.log("Locatore Method");
    
}
frame(): void {
    console.log("Frame Method");
    
}
}

let childObjec = new childClass()
childObjec.fill();
childObjec.clear();
childObjec.frame();
childObjec.locator();
