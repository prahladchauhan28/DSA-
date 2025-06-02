//    * 
//   * * 
//  * * * 
// * * * * 

let prompt=require('prompt-sync')();
let size =prompt("Enter the number");

for(let i=1;i<=size;i++)
{
    for(j=1;j<=size-i;j++){
        process.stdout.write(" ");
    }
    for(j=1;j<=i;j++){
        process.stdout.write("* ");
    }
    console.log();
}