let prompt=require("prompt-sync")();
let s1=prompt("Enter the 1st String : ");
let s2=prompt("Enter the 2nd String : ");
let isAnogram=true;

let freqArr=new Array(123).fill(0);
if(s1.length!=s2.length) console.log("Given String is not Anogram");

for(let i=0;i<s1.length;i++)
{
    let ascii=s1.charCodeAt(i);
    freqArr[ascii]=freqArr[ascii]+1;
}
for(let i=0;i<s2.length;i++)
{
    let ascii=s2.charCodeAt(i);
    freqArr[ascii]=freqArr[ascii]-1;
}

for(let i=0;i<freqArr.length;i++)
{
    if(freqArr[i!=0])
    {
        isAnogram=false;
        break;
    }
}

if(isAnogram) console.log("Given Strings are anogram!")
    else console.log("given String are not a Anogram!")