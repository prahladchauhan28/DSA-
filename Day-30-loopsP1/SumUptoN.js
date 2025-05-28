let prompt =require ('prompt-sync')();
let n= Number(prompt("enter Nth value"));
let sum =0;
for (let i=1;i<=n;i++)
{
    sum=sum+i;
}
console.log("Sum of N number is :"+sum);