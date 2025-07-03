const URL = 'http://leaftaps.com/opentaps/control/login';

const SplitString = URL.split('/');
console.log(SplitString[3]);
console.log(SplitString[SplitString.length -1]);

const modifiedURL = URL.replace('login', 'main');
console.log(`Target URL is : ${modifiedURL}`);


