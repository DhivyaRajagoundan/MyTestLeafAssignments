//Given a string s consisting of words and spaces, return the length of the last word in the string.


//03. Conditional Statements ---- Learn if-else and switch case
    // 3.1 IF/ELSE
//let browserName;
function launchBrowser(browserName){
  if(browserName ==='Chrome'){
    console.log("Launch Chrome Browser");
    
  }else if(browserName === 'Firefox'){
    console.log("Launch Firefox Browser");
    
  }else if(browserName === 'Edge'){
    console.log("Launch Edge Browser");
    
  }
  else{
    console.log("Invalid Input");
  }
}

launchBrowser("Edge");

// SWITCH
function runTests(testType){
switch(testType){
    case 'Smoke':
        console.log("Performing Smoke Test");
        break;
    case 'Sanity':
        console.log("Performing Sanity Test");
        break;
    case 'Regression':
        console.log("Performing Regression Test");
        break;
    case 'default':
        console.log("Performing Unit Test");
        break;

}
}
runTests("Smoke")

// REVERSE STRING TO CHECK PALINDROME
function reverseStr(testVal){
let newVal = testVal.split('');
let revstr="";
for(let i=newVal.length-1;i>=0;i--){
  revstr = revstr.concat(newVal[i]);
}
  if(testVal===revstr){
    console.log("The Given Text is Palindrome");  
  }
  else{
    console.log("The String is not plaindrome"); 
  }
}
reverseStr("level") 
