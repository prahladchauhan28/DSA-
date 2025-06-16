let prompt=require("prompt-sync")();
let s=prompt("Enter the string!");
for( let i=s.length-1;i>=0;i--){
    process.stdout.write(s[i]+",");

}