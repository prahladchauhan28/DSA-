// amount          ||  Discount
// 0-5k            ||  0%
// 5001-7k         ||  5%
// 7001-9k         ||  10%
// more than 9k    ||  20%
                 
// // Approach-01 ✅
let prompt=require('prompt-sync')();
let discount=0;
let amount=Number(prompt("Enter the amount "));
// if(amount>=0 && amount<=5000)
// {
//     console.log(amount);
// }
// else if(amount>=5001 && amount<=7000)
// {
//     console.log(amount-(5*amount)/100);
// }
// else if(amount>=7001 && amount<=9000)
//     {
//         console.log(amount-(10*amount)/100);
//     }
//     else if(amount>=7001 && amount<=9000)
//         {
//             console.log(amount-(15*amount)/100);
//         }
// else if(amount>=9000)
    //         {
    //             console.log(amount-(20*amount)/100);
    //         }
//         else {
//             console.log("Invaild Output");
// }

//  Aproach-02

if(amount>=0 && amount<=5000)
    {
        discount=0;
    }
    else if(amount>=5001 && amount<=7000)
    {
        // console.log(amount-(5*amount)/100);
        discount=5;
    }
    else if(amount>=7001 && amount<=9000)
        {
            // console.log(amount-(10*amount)/100);
            discount=10;
        }
        else if(amount>=7001 && amount<=9000)
            {
                // console.log(amount-(15*amount)/100);
                discount=15;
            }
    else if(amount>=9000)
                {
                    // console.log(amount-(20*amount)/100);
                    discount=20;
                }
                else{
                    console.log("Invaild Output");
                    return; 
                }   

   
        console.log(amount-(discount*amount)/100);
   
                