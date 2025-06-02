// A 
// A B
// A B C
// A B C D
// A B C D E

const prompt=require("prompt-sync")();
let size=prompt("enter the size");

for(let i=1;i<=size;i++){
    let temp=65;
    for(j=1;j<=i;j++){
        process.stdout.write(String.fromCharCode(temp)+" ");
        temp++;
    }
    console.log();
}