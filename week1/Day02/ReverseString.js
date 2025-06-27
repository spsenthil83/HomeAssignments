let MyName = "Senthil Sivantha Perumal"
let reverseName=""
console.log("My Name is :" +MyName)
for(let i=MyName.length-1;i>=0;i--){
    reverseName=reverseName+MyName[i]
    // console.log(reverse)
}
console.log(`Reversed Name is : ${reverseName}`)

// let reversemethod = input.split('').reverse().join('')   // direct method, but we cannot debug
// console.log(`reversed using direct reverse method is : ${reversemethod}`)


// // Split Method
// let Message = "Welcome to my world"
// console.log(Message.split(' '))
// let splitMsg = Message.split(' ')
// for(let i=0;i<splitMsg.length;i++){
//     console.log(splitMsg[i])
// }