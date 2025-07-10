let prompt=require("prompt-sync")();

let n=Number(prompt("enter the Nth term "));
function sum(n)
{
    if(n==1)return;
    return n+(n-1);
}
console.log(sum(n));
