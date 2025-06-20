// Two Sum (leetcode-01)

// without using map
// var TwoSum=function (number,target)
// {
//     for(let i=0;i<number.length;i++)
//     {
//         for(let j=i+1;j<number.length;j++)
//         {
//             if(number[i]+number[j]==target)
//             {
//                 return [i,j];
//             }
//         }
//     }
// }

// using Map Data Structure !

var TwoSum = function (number, target) {
  let map = new Map();
  let ans = [-1, -1];

  for (let i = 0; i < number.length; i++) {
    if (map.has(target - number[i])) {
      ans[0] = i;
      ans[1] = map.get(target - number[i]);
      return ans;
    } else {
      map.set(number[i], i);
    }
  }
};

let number = [2,7, 5, 11, 15];
let target = 9;
console.log(TwoSum(number, target));
