let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let leftSum=0;
let RightSum=0;
for(let i=0;i<arr.length;i++)
{
    for(let j=0;j<arr[i].length;j++)
    {
        if(i==j) leftSum+=arr[i][j];
        if(i+j==arr.length-1) RightSum+=arr[i][j];

    }
}
console.log("left Sum "+leftSum);
console.log("Right Sum "+RightSum);
