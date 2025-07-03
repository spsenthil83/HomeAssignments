// Palindrome Check

const input = "TOM MOT"
const inputUC = input.toUpperCase();

let reversetext=""
console.log("Input Text is :" +input)
console.log("Input text in Upper Case is :" +inputUC)
for(let i=inputUC.length-1;i>=0;i--){
    reversetext=reversetext+inputUC[i]
}
console.log(`Reversed text is : ${reversetext}`)
if(inputUC===reversetext){
    console.log(`The given input is a Palindrome`);
}
else{
    console.log(`The given input is NOT a Palindrome`);
}