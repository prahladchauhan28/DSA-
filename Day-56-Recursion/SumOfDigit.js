let prompt=require("prompt-sync")();

let num=Number(prompt("Enter the digit!"));

function sumofDigit(num)
{
    if(num<10) return num;
    return num%10+sumofDigit(Math.floor(num/10));
  
  
}

console.log( sumofDigit(num));
