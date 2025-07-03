// Var - Reassignment and redeclaration is allowed
var companyName
console.log(companyName)
var companyName='Netflix' // Reassignment is allowed
console.log(companyName +":"+typeof companyName)


console.log("Redeclaration example")
var empDetails = 23
var empDetails = "QA" // Redeclaration is allowed
console.log(empDetails)

// Let - Reassignment is allowed
let browserName = 'Chorme'
browserName = 'Edge' //Reassignment is allowed
console.log(browserName)
// Let browserName = 'FF' -- Redeclaration is not allowed

// const - reassignment and redeclaration is NOT allowed
console.log("const test")
const pi=3.14 //final value
pi=true // Type error - reassignment is not possible - Throws error
console.log(pi)
// const pi=90 --> redeclaration is not possible