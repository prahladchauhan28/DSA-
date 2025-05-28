let prompt= require ('prompt-sync')();
let n=Number(prompt("enter the n th value!"));

for (let i=1 ;i<=n;i++)
{
    console.warn("Hello👋");
}
if(isNaN(n))
{
    console.error("Invaid input");
}
