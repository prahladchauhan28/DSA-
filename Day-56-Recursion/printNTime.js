let prompt=require(`prompt-sync`)();
let n=Number(prompt("enter the Nth size"));

function printHello(n)
{
    if(n==0)return;
    console.log("hello world!");
    printHello(n-1);
}
printHello(n);