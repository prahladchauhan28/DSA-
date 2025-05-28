let prompt =require ('prompt-sync')();
let num= Number(prompt("enter Number"));

let isPrime=true;

for(let i=2;i<num;i++)
{
    if(num%i==0)
    {
    isPrime=false;
    break;
    }
}
if(isPrime)console.log("Prime Number!");
    else console.log("Not a Prime Number!");