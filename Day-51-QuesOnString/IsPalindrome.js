let prompt=require("prompt-sync")();
let s=prompt("Enter the string!");


// Two -pointer Approch !

let ispalindrome=false;
let i=0,j=s.length;
while(i<j)
{
    if(s[i]!=s[j])
    {
        ispalindrome=true;
        break;
    }
    i++;
    j--;
}

if(ispalindrome) console.log("String is Palindrome!");
    else console.log("String in not Palindrome!");