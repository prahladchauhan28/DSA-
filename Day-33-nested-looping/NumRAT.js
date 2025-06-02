// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 

let prompt=require("prompt-sync")();
let size=Number(prompt("Enter the size "));

for(let i=1;i<=size;i++)
{
    for(let j=1;j<=i;j++){
        process.stdout.write(j+" ");
    }
    console.log();
}