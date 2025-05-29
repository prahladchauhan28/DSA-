
// it is number whose square ends in same digits as the number itself !

let prompt =require ('prompt-sync')();
let num= Number(prompt("enter number"));

let copy=num;
let count=0;
let sqr=num*num;
while(num>0)
{
    count++;
    num=Math.floor(num/10);

}
if(sqr%Math.pow(10,count)==copy) console.log("Automorphic number !");
else console.log("Not a Automorphic number !");
