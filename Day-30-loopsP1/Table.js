let prompt =require ('prompt-sync')();
let num= Number(prompt("enter Number for Table!"));

for (let i=1;i<=10;i++)
{
    console.log(`${num}*${i}=${num*i}`);
}