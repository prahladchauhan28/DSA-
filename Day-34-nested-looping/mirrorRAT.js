//             * 
//           * * 
//         * * * 
//       * * * * 
//     * * * * * 
//   * * * * * * 

let prompt=require ('prompt-sync')();
let size=Number(prompt('Enter the size of pattern'));

for(let i=0;i<=size;i++)
{
    for(let j=0;j<=size-i;j++)
    {
        process.stdout.write("  ");
    }
    for(let j=0;j<=i;j++)
    {
        process.stdout.write("* ");
    }
    console.log();
}