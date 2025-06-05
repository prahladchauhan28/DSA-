let prompt=require("prompt-sync")();
let target=Number(prompt("enter the target value "))

let arr=[10,20,30,40,50,60];
let index=0;

for(let i=0;i<arr.length;i++)
{
    if(arr[i]==target)
        {
            index=i;
            break;
        }
    
}
if(index==-1) console.log("Element not found!");
else console.log("Element found at index="+index);