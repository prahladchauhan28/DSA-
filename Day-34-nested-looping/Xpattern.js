// *       * 
//   *   *   
//     *     
//   *   *   
// *       * 

let prompt=require ('prompt-sync')();
let size=Number(prompt('Enter the size of pattern'));

for(let i=1;i<=size;i++)
{
    for(let j=1; j<=size;j++)
    {
        if(i==j||i+j==size+1){
            process.stdout.write("* ")
        }else{
            process.stdout.write("  ")
        }
    }
        console.log();

}