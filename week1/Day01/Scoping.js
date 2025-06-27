// var --> Global & functional scoping
// let & const --> Block level scoping inside {}
var age = 17 //global scoping

function voting(){
    let voterAppStatus = 'Not Eligible' //block scoped

    if(age===18) // '===' strict equal
    {var isEligibleToVote = true //function scoped
    let voterAppStatus='Eligible for voter ID' //block scoped
    console.log("person is eligible to apply. " +voterAppStatus)    
    }
    else
    {   let voterAppStatus = 'Not eligible for voter ID'  //block scoped
        console.log("Person is NOT eligible to apply. " +voterAppStatus)
    }
    console.log(isEligibleToVote)
}
console.log(age)
// console.log(isEligibleToVote)  //Reference error - undefined
// calling the function - functional hoisting
voting()