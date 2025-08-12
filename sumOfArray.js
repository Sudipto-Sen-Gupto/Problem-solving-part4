
function sumOfArray(array){
    if(Array.isArray(array)==false){
        return "Invalid";
        
    }
    let sum=0;
    for(const item of array){
        if(typeof item !=="number"){
            return "Invalid Bro";
        }
        sum +=item;

    }
    return sum;
}
const result=sumOfArray([1,2,3]);
console.log(result);