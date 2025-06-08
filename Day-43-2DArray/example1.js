//  user input And inserting elements in 2D array !

let prompt=require("prompt-sync")();
let size=Number(prompt("enter the number "));

let arr=new Array(size);

for(let i=0;i<arr.length;i++)
{
    let innersize=Number(prompt("enter the innner Size of array "));
    arr[i]=new Array(innersize);
}
for(let i=0;i<arr.length;i++)
{
    for(let j=0;j<arr[i].length;j++)
    {
        arr[i][j]=Number(prompt("enter elements "))
    }
}

console.log(arr);