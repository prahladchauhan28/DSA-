let prompt=require("prompt-sync")();

let n=Number(prompt("enter the Nth term "));
function natural(n)
{
    if(n==0)return;
      natural(n-1);
    process.stdout.write(n+" ");
  
}
natural(n);
