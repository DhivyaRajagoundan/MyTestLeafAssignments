// CLASSROOM ASSIGNMENT UNDERSTANDING JAVASCRIPT SCOPING (Var vs let vs global)

// LET AND CONST KEYWORDS ARE BLOCK SCOPE
// VAR IS FUNCTION SCOPE
genderType = "female";

function printGender(){
    var color = "brown";
    if(genderType.startsWith("female")){
        var age = 30;
        const score = 78;
        let color = "pink";
        console.log("The Color inside the BLOCK",color); 
        console.log ("Score is",score);// INSIDE THE BLOCK
        
    }
        console.log("Print Age which is inside the BLOCK",age);
       // console.log ("Score is",score);
        console.log("The Color inside the BLOCK",color); 
}
printGender();
console.log("The Global Value outside function and the Block",genderType);

// FUNCTION TO DETERMINE WHETHER NUMBER IS POSITIVE/NEGATIVE/ZERO USING IF/ELSE

function numberType(numberVal){
if(numberVal>0){
    console.log("The Given Digit is Positive Number");
}
else if(numberVal<0){
    console.log("The Given Digit is Negative Number");
}
else if (numberVal===0){
    console.log("The Given Digit is Neutral");
}
else{
    console.log("The Given Digits is not a number");
}
}
numberType(90);

// FUNCTION TO DETERMINE WHETHER NUMBER IS POSITIVE/NEGATIVE/ZERO USING SWITCH

function determineNumType(numType){
    console.log("Switch");
    switch(numType){
    case 90:
        console.log('The Given Number is POSITIVE');
       // break;
    case -10:
        return "The Given Number is NEGATIVE";
        //break;
    case 0:
        return "The Give Number is ZERO";
        //break;
    }
}
determineNumType(90);


// JAVASCRIPT FUNCTION TO PRINT EVEN OR ODD NUMBER

function isOddOrEven(checkNum){
if(checkNum%2===0){
    console.log("The Given Number is Even Number");
}
else{
    console.log("The Given Number is Odd Number");
}
}
isOddOrEven(11);