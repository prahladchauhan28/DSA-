let prompt=require("prompt-sync")();
let n=Number(prompt("Enter the number"));

console.log(SqRoot(n));


function SqRoot(n)
{
    let i=0;
    for(;i*i<=n;i++)
    {
        if(i*i==n)return i;
    }
    return i-1;
}