let prompt=require('prompt-sync')();

let com=Math.floor(Math.random()*100+1);
let input;

do{
   input=Number(prompt("Enter the random number in range 1 to 100 !"));

   if((isNaN(input)) || input<0 || input>100)
    {
        console.log("Enter the vaild number!");
    }
    if(input>com)    console.log("input is too high , try again!");
    else if(input<com)    console.log("input is too Low , try again!");
    else  console.log("congrats🎉! Number is "+com);
    
     

}while(input!==com);


