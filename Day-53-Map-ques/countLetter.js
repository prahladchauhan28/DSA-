let s="malayalam";
let map=new Map();

for(let i=0;i<s.length;i++)
{
    let ch=s.charAt(i);
    if(map.has(ch))
    {
        map.set(ch,map.get(ch)+1);
    }
    else {
        map.set(ch,1);
    }
}
console.log(map);