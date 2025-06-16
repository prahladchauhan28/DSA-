// Captialize first and last letter of word in the sentance
//input :  hello bhai kay ho rha hai 
//output:  HellO BhaI KaY HO RhA HaI 

let sentance="hello bhai kay ho rha hai ";

let ans='';
let arrStr=sentance.split(" ");
for(let i=0;i<arrStr.length;i++)
{
    let word=arrStr[i];
    if(word.length<=2) ans+=word.toUpperCase()+" ";
    else{
        ans+=
        word.charAt(0).toUpperCase()
        +word.substring(1,word.length-1)
        +word.charAt(word.length-1).toUpperCase()+" ";
    }
}
console.log(ans);