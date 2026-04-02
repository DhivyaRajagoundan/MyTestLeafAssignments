// Factorial of a Given Number
//let num:number=0;
function factorial(num:number){
let fact =1;
    for(let i=1;i<=num;i++){

        fact = fact *  i;
    }
console.log(fact)
}
factorial(3)

//Fibanoci Series

//let nums:number;
let a: number = 0;
let b: number = 1;
let fib: number;
function fibonacci(nums: number) {

    for (let i = 0; i <= nums; i++) {
        console.log(a);
        a = b;
        fib = a + b;
        b=fib;
    }

}

fibonacci(6)