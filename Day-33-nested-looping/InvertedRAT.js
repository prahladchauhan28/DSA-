// * * * * * 
// * * * *
// * * *
// * *
// *

const prompt=require("prompt-sync")();
let size=Number(prompt("enter the size"));

for(let i=1;i<=size;i++)
{
    for(let j=1;j<=size-i+1;j++)
    {
        process.stdout.write("*"+" ");
    }
    console.log();
}
