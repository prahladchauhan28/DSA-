let prompt=require('prompt-sync')();
let a=Number(prompt("enter the first number!"));
let b=Number(prompt("enter the Second number!"));

function findGreatest(a,b)
{
    if(a>b)
    {
        return a;
    }
    else{
        return b;
    }
}
console.log(findGreatest(a,b));