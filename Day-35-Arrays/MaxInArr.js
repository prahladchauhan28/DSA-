let arr=[10,20,30,36,70,40,50,60];
let max=arr[0];

for(let i=0;i<arr.length;i++){
    if(arr[i]>max)
    {
        max=arr[i];
    }
}
console.log("Max array is ="+max);