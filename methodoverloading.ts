class TextBox {
    //Signature
    fill(text: String): void
    fill(text: String, locator?: String): void
    
    //Implemntation
    fill(text: String, locator?: String) {

        if (locator) {
            console.log("The Text Message is " +" "+ text +" "+ "and the Locator is" +" "+ locator);
        }
        else

            console.log("The Text Message is " + text);

    }

}
let obj1 = new TextBox();
obj1.fill("Message","Test Locator");