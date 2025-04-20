function calculateCompoundInterest(P,r,t,n)
{
    let A=(P*Math.pow((1+r/n),n*t));
    let CP=(A-P).toFixed(2);
    return CP;

}
console.log(calculateCompoundInterest(1000,.5,10,4));