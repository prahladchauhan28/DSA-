// leetcode-1832


function pangram(sentance)
{
    let set=new Set();
    for(let i=0;i<sentance.length;i++)
    {
        let ch=sentance.charAt(i).toLowerCase();
        if (ch >= 'a' && ch <= 'z') {
            set.add(ch);
        }
    }
    return set.size==26;

}

let sentance="pangram is where every letter of english alphabet appears at the least one";

if(pangram(sentance)) console.log("is a Pangram!");
else console.log("not a pangram!");