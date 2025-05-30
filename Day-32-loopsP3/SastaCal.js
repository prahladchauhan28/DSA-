let prompt=require("prompt-sync")();

let inputYes;

do{

    let num1=Number(prompt("Enter the first Number!"));
    let num2=Number(prompt("Enter the Second Number!"));
    let operators=prompt("Enter vaild operator(+,-,/,*)!");

    switch(operators)
    {
        case "+":
            console.log("result:"+(num1+num2));
            break;
        case "-":
            console.log("result:"+(num1-num2));
            break;
        case "/":
            console.log("result:"+(num1/num1));
            break;
        case "*":
            console.log("result:"+(num1*num1));
            break;
        default:
            console.log("enter vaild operator!");
            
    }
    inputYes=prompt("want to cantinue :(Yes/No)").toLowerCase();


}while(inputYes==="yes");