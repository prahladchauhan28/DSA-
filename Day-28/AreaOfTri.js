function areaOfTriangle(a,b,c){

    if(a+b<=c || b+c<=b|| a+c<=b)
    {
        console.log("Not possiable ");
        
    }
    else{
        let S=(a+b+c)/2;
        let Aera=(Math.sqrt(S*(S-a)*(S-b)*(S-c))).toFixed(2);
        return Aera;
    }

}
console.log(areaOfTriangle(3,4,5));
