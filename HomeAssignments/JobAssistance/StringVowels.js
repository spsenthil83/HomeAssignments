let input='Count of Vowels in this String'
let vowelsCount=0
let vowels=['a','e','i','o','u']
for(let i=0;i<input.length;i++){
    let char=input[i].toLowerCase() 
    if(vowels.includes(char)){
        vowelsCount++ // Increment count if character is a vowel
    }
}
console.log("Number of vowels in the string:", vowelsCount);