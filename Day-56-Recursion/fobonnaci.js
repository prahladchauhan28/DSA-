function fibonnaci(n,first,second)
{
    if(n===0) return;
    let third=first+second;
    process.stdout.write(third+" ");
    fibonnaci(n-1,second,third);
}

let prompt=require("prompt-sync")();
let n=Number(prompt("enter the Nth term "));
let first=0,second=1;
process.stdout.write(first+" "+second+" ");
fibonnaci(n,first,second);

