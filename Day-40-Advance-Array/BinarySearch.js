let arr=[10,20,30,40,45,50,60];

function binarySearch(arr,target)
{
    let s=0;
    let e=arr.length-1;
    while(s<=e){
        let mid=Math.floor((s+e)/2);
        if(arr[mid]==target) return mid
        else if(arr[mid]>target)  e=mid-1;
        else s=mid+1;
    }
    return -1;
}

if(binarySearch(arr,90)===-1 )console.log("not found!");
else console.log("element found");