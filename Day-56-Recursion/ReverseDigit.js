let prompt=require("prompt-sync")();
let num=Number(prompt("Enter the digit!"));

function ReverseDigit(n,rev)
{
    if(n==0) return rev;
    return ReverseDigit(Math.floor(n/10),rev*10+(n%10));
}

console.log(ReverseDigit(num,0));
