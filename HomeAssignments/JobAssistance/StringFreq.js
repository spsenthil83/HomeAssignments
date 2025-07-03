let string = 'senthilsivanthaperumal';
let frequency = {};
let maxChar = '';
let maxCount = 0;

for (let i = 0; i < string.length; i++) {
  let char = string[i];

  // Check if the character already exists in the frequency object
  if (frequency[char] !== undefined) {
    frequency[char] += 1;
  } else {
    frequency[char] = 1;
  }

  // Update maxChar and maxCount if higher frequency
  if (frequency[char] > maxCount) {
    maxCount = frequency[char];
    maxChar = char;
  }
}
console.log("Most frequent character is: " + maxChar);
console.log("Number of occurrence is: " + maxCount);