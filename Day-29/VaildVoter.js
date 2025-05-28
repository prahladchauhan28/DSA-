let prompt =require ('prompt-sync')();
let age=Number(prompt("enter your age !"));

function vaildVoter(age)
{
    if(age>=18)
    {
        console.log("You Can Voter !")
    }
    else{
        console.log("You Can't Voter !")
    }
}
vaildVoter(age);