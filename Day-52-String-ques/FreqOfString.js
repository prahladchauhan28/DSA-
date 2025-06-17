// Find the frequency of character in String !

let prompt=require("prompt-sync")();
let s=prompt("enter the string! ");
let freqArr= new Array(123).fill(0);

for(let i=0;i<s.length;i++)
{
    let ascii=s.charCodeAt(i);
    freqArr[ascii]=freqArr[ascii]+1;
}
for(let i=0;i<=freqArr.length;i++)
{
    if(freqArr[i]>0)
    {
        console.log(String.fromCharCode(i)+"->"+freqArr[i]);
    }
}

// enter the string!prahlad
// a->2
// d->1
// h->1
// l->1
// p->1
// r->1
