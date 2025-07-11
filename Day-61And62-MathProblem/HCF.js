let prompt = require("prompt-sync")();
let a = Number(prompt("Enter the first number: "));
let b = Number(prompt("Enter the second number: "));

function HCF(a, b) {
    if (a === 0) return b;
    if (b === 0) return a;

    if (a === b) return a;
    else if (a > b) return HCF(a - b, b);
    else return HCF(a, b - a);
}

console.log("HCF is:", HCF(a, b));
