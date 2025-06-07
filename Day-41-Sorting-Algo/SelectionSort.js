let arr=[10,2,3,5,10,6,4];
let n=arr.length;

for(let i=0;i<n-1;i++)
{
    let small=i;
    for(let j=i+1;j<n;j++)
    {
        if(arr[small]>arr[j])
        {
            small=j;
        }
    }
    if(small!=i)
    {
        let temp=arr[i];
        arr[i]=arr[small];
        arr[small]=temp;
    }
}
    
console.log("Sorted Array:", arr);

