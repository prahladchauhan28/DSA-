let prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number: "));

checkRange(n);

function checkRange(n) {
    let isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // Print prime numbers
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) process.stdout.write(i + " ");
    }
}
