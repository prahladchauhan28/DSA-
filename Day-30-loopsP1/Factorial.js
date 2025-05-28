let prompt =require ('prompt-sync')();
let num= Number(prompt("enter Number "));

let fact=1;
for(let i=1;i<=num;i++)
{
    fact*=i;
}
console.log("Factorial is Equal:"+ fact);