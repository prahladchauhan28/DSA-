let prompt=require('prompt-sync')();
let year=Number(prompt("enter the year"));

if(year%4==0 && year%100!=0)
{
    console.log(year+" is a Leap Year");
}else if(year%400==0)
{
    console.log(year+" is a Leap Year");
}
else{
    console.log(year+" Not a Leap Year");

}