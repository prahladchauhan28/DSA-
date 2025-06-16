// Count the pref from the Perfix:

let prefix=["pay","attention","pratice","attend"];
let pref="at";
let count=0;
for(let i=0;i<prefix.length;i++)
{
    if(prefix[i].startsWith(pref)) count++;

}
console.log(count);