
function cashOut(money){
    if(typeof money !== "number" || money<0){
        return "Invalid";
    }
    let charge=1.75/100;
    let cashOutCharge=money*charge;
    let finalCashOutCharge=parseFloat(cashOutCharge.toFixed(4))
    return finalCashOutCharge;
}

const amount=cashOut(-3500);
console.log(amount); 
