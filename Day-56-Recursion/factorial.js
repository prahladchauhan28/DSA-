let prompt=require("prompt-sync")();

let n=Number(prompt("enter the Nth term "));

function factorial(n)
{
    if(n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(n));
