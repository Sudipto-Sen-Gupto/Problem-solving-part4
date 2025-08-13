
function validProposal(person1,person2){
    // console.log(typeof person1);
    // console.log(typeof person2);
    if(typeof person1!=="object" || typeof person2 !=="object")  {
        return "Invalid"
    }

    if(person1.gender!==person2.gender && Math.abs(person1.age-person2.age<=7)){
        return true;
    }
    
    else{
        return false;
    }
}
const result=validProposal({ name: "toya", gender: "female", age: 20 }, 
{ name: "kader", gender: "male", age: 25 });
console.log(result);
