let prompt=require("prompt-sync")();
let s=prompt("Enter the string!");
for( let i=0;i<s.length;i++)
{
    // console.log(s[i]);
    process.stdout.write(s[i]+",");
}