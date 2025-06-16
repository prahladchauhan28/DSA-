let prompt=require("prompt-sync")();
let s=prompt("Enter the string!");

let rev='';
let copyS=s;

for (let i =s.length-1;i>=0 ;i--) {
    rev+=s[i];
}
console.log(rev +" "+ copyS)
if(rev===copyS) console.log("Yes");
else console.log("No");
