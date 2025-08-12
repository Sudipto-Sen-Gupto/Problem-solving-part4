
function countVowels(vow){
    if(typeof vow !=="string"){
        return "invalid";
    }
    let count=0;
    vow=vow.toLowerCase();
          
    for(const item of vow){
        
      if(item==="a"||item==="e"||item==="i" ||item==="o" || item==="u"){
        count ++;
      }
    }
    
    return count ;
}
const output=countVowels("RABINDRA");
console.log(output);