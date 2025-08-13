
function calculateSleepTime(times){
    if(!Array.isArray(times)===true){
        return "Invalid";
    }
    let sum=0;
    for(const item  of times){
        if(typeof item !=="number"){
            return "Invalid"
        }
            sum +=item;
    }
    let hour=Math.floor(sum/3600);
    let remainMin=sum%3600;
    let minute=Math.floor(remainMin/60);
    let second=remainMin %60;
        return {hour:hour,minute:minute,second:second};
}

const totalTimes=calculateSleepTime([1000, 2000, 725] );
console.log(totalTimes);