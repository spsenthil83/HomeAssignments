// Two type of string ==> String Literal & String Object

let username = 'senthilsp@test.com'  //String literal

console.log("Length of UN is :" +username.length)
// ChatAt ==> index starts from 0, returns the character at index 8
console.log("Print index 8 character: " +username.charAt(8))
// indexOf ==> returns the character at the index. Only the first occurence of the index
console.log("Position of the character: " +username.indexOf('i'))
console.log("Postition of last occurence: "+username.lastIndexOf('i'))  // lastIndexOf ==> Last Occurence

let price = `rs1500`
// template literal -> ${price}
console.log(`This price of product's is ${price}`)

// concatanate operator
let FN = 'Senthil'
let LN = `SP`
console.log(FN.concat(LN))

// substing ==> print value based on index
console.log(FN.substring(2,5))  // returns index between 2 & 5 (start & end index)
console.log(FN.substring(3))  // returns start from index value 3 (start index)
