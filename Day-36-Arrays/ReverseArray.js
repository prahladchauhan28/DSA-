// Approch-01

let arr=[20,30,10,20,40,50];
let temp=new Array(arr.length);
let i=0;
for(let j=arr.length-1;j>=0;j--)
{
    temp[i]=arr[j];
    i++;
}
console.log(temp);

// Approch-02-No extra space

let arr1=[1,2,3,4,20,30,10,20,40,50];
let k=0,x=arr.length-1;
while(k<x){
    let temp1=arr1[k]
    arr1[k]=arr1[x]
    arr1[x]=temp1;
    i++;
    x--;
}
console.log(arr1);