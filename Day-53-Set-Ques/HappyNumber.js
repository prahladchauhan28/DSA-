// leetcode -202 : 
var isHappy =function(n)
{
    let set =new Set();
    while(true)
    {
        let sum=0;
        while(n>0)
        {
            let rem=n%10;
            sum=sum+(rem*rem);
            n=Math.floor(n/10);
        }
        if(sum==1) return true;
        if(set.has(sum)) return false;
        else set.add(sum);
        n=sum;
    }
    return false;
}
 
let prompt=require("prompt-sync")();
let number= Number(prompt("enter number!"))
if(isHappy(number)==true) console.log("Perfect Number !");
else console.log("Not a Perfect Number!");