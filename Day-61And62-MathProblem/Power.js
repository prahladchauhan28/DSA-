// let x = 2.00000, n = 10;
let x = 2.10000, n = 3;
console.log(myPow(x,n));


function myPow(x,n)
{
    if(n==0) return 1.0;
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    return temp(x, n);
}

function temp(x,n)
{
    if(n==0) return 1;
    let ans=temp(x,parseInt(n/2));
    if(n%2==0) return ans*ans;
    return ans*ans*x;
}