let arr=[20,5,3,7,8,21,21];
let max=Math.max(arr[0],arr[1]);
let smax=Math.min(arr[0],arr[1]);

for(let i=0;i<arr.length;i++)
{
    if(arr[i]>max)
    {
        smax=max;
        max=arr[i];
    }
    else if(arr[i]>smax && arr[i]!=max)
    {
        smax=arr[i];
    }
}
console.log("Second max is = "+smax);