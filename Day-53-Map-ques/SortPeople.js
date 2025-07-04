// leetcode-2418 !

// Example 1:
// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.


function sortPeople(names, heights) {
    // Your code here
    let map =new Map();
    //mapping
    for (let i = 0; i < names.length; i++) {
        
        map.set(heights[i],names[i]);
    }
    //sort
    heights.sort((a,b)=>b-a);
    
    let result=new Array(heights.length);
    for(let i=0;i<heights.length;i++)
    {
        result[i]=map.get(heights[i]);
    }
    return result;
}
let names=["emma","john","harry"];
let heights=[180,150,160];

console.log(sortPeople(names,heights));
