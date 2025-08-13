
function willSuccess(mark){
    if(!Array.isArray(mark)===true){
        return "Invalid number";
    }
    let sum=0;
    let average;
    for(const item of mark){
           sum +=item;
    }
    average=sum/mark.length;
    if(average>=50){
        console.log(average);
        return true;
    }
    else {
        console.log(average);
        return false
    }

}

const result=willSuccess([ 90 ,  40 , 45 , 30 , 34 , 49 ])
console.log(result);