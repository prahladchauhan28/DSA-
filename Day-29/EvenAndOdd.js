let prompt=require('prompt-sync')();
let number=Number(prompt("enter the number!"))


function EvenOdd(number)
{
  if(number%2==0)
  {
    console.log("Number is even!")
  }
  else{
    console.log("Number is odd!")

  }
}
EvenOdd(number);