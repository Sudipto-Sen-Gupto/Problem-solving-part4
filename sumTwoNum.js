
function sum(a,b){
   
    return a+b;
}

function multiply(a,b){
    let mul=a*b;
    let result=sum(a,b)+mul;
    return result;
}
const re=multiply(3,5);
console.log(re);