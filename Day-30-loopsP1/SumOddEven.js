let prompt =require ('prompt-sync')();
let n= Number(prompt("enter Nth value"));

let OddSum=0, EvenSum=0;
for(let i=1;i<=n;i++){

    if(i%2==0)
    {
        EvenSum+=i;
    }
    else{
        OddSum+=i;
    }
}
console.log("Even Sum is"+ n+" terms:"+EvenSum);
console.log("Odd Sum is"+ n+" terms:"+OddSum);
