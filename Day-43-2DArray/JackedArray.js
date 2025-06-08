let prompt=require("prompt-sync")();
let size=Number(prompt("Enter size of array : "));
let arr=new Array(size);

for(let i=0;i<arr.length;i++)
{
    let innerSize=Number(prompt("enter the size of inner array : "));
    arr[i]=new Array(innerSize);
}
for(let i=0;i<arr.length;i++)
{
    for(let j=0;j<arr[i].length;j++)
    {
        arr[i][j]=Number(prompt("enter the elements : "));

    }
}

for(let i=0;i<arr.length;i++)
{
 console.log(arr[i]);
}