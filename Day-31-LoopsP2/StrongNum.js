
// armStrong || Strong number is number in which the sum is factorial of its digit is equal to the number itself !

let prompt =require ('prompt-sync')();
let n= Number(prompt("enter number"));

let copy=n;
let ans=0;

while(n>0)
{
    let dig=n%10;
    let fact=1;
    for (let i=1;i<=dig;i++)
    {
        fact=fact*i;
    }
    ans=ans+fact;
    n=Math.floor(n/10);
}
if(copy==ans) console.log("Strong Number! ");
else console.log("Not a Strong Number ");