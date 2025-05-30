// user input using do while loop
let prompt =require("prompt-sync")();
let userInput;
do{
    console.log('namaste Duniya');
    userInput=prompt("app continue karna chahte ho?Yes/No").toLowerCase();

}while(userInput==="yes")