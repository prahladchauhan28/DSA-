let prompt =require ('prompt-sync')();
let n= Number(prompt("enter Nth value"));

for (let i=1 ;i<=n/2;i++)
{
    if(n%i==0)
    {
        console.log(i);
    }
}
console.log(n);