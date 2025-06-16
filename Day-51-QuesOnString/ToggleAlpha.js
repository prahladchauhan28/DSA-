let prompt=require("prompt-sync")();
let s=prompt("Enter the string!");

console.log(s);
let ans="";
for (let i = 0; i < s.length; i++) {
    
    let asci=s.charCodeAt(i);
    if(asci>=65 && asci<=90)
    {
        ans=ans+String.fromCharCode(asci+32);
    }
    else if(asci>=97 && asci<=122)
    {
        ans=ans+String.fromCharCode(asci-32);

    }
}
console.log(ans);

// OutPut::

// Enter the string!prAHLad
// prAHLad
// PRahlAD