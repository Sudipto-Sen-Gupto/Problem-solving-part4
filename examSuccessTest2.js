
function willSuccess(mark){
    if(!Array.isArray(mark)===true){
        return "Invalid";
    }
    let count=0;
    let count2=0;
    for(const item of mark){
        if(item>=50){
            count ++;
            
        }
        else {
            count2 ++;
           
        }
    }
    
    if(count>count2){
        return true;
    }
    else{
        return false;
    }
}
const result=willSuccess([ 90 ,  99 , 87 , 48 , 34 , 49 ]);
console.log(result);