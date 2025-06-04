let prompt=require("prompt-sync")();
let size=Number(prompt("enter the size of array!"));
let arr=new Array(size);
let sum=0;

for(let i=0;i<arr.length;i++)
{
    arr[i]=Number(prompt("enter the element value!"));
    sum=sum+arr[i];
}
console.log("Sum of array is ="+sum);