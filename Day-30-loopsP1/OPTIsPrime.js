let prompt =require ('prompt-sync')();
let num= Number(prompt("enter Nth value"));

let isPrime=isPrimefun(num);
if(isPrime)console.log("Prime Number!");
    else console.log("Not a Prime Number!");

   function isPrimefun(num)
   {
        if(num<=1) return false;
        if(num==2) return true;
        if(num%2==0)return false;
        for(let i=3;i<=Math.floor(Math.sqrt(num));i+=2)
        {
            if(num%i==0) return false;
        }
        return true;
   } 