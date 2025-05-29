let prompt =require ('prompt-sync')();
let n= Number(prompt("enter number"));

let copyn=n;
let rev=0;

while(n>0)
{
     let rem=n%10;
    rev=(rev*10)+rem;
    n=Math.floor(n/10);
}

if(copyn===rev) console.log("Number is Palindrome Number!");
else console.log("Not a palindrome Number!")
