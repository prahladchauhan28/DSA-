let prompt =require ('prompt-sync')();
let n= Number(prompt("enter number"));

let sum =0;
while(n>0)
{
    let rem=n%10;
    sum=sum+rem;
    n=Math.floor(n/10);

}
console.log("Sum of Digits is:"+sum);