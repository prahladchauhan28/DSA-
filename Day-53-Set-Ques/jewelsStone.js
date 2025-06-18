// leetcode -771

var numJewelsInStore=function(jewels,stones)
{
    let set =new Set();
    for(let i=0;i<jewels.length;i++)
    {
        set.add(jewels.charAt(i));
    }
    let count=0;
    for(let i=0;i<stones.length;i++)
    {
        let ch=stones.charAt(i);
        if(set.has(ch)) count++;

    }
    return count;
}

let jewels="Aba";
let stones="ABbcaaAbbC";
console.log(numJewelsInStore(jewels,stones));
