
function validContact(number){
        if(typeof number!== "string"){
            return "Invalid";
        }

    if(number.length===11 && number.startsWith("01") && !number.includes(" ")){
        return true;
    }
    else 
    {
        return false
    }
}
const valid=validContact("01745688796")
console.log(valid);