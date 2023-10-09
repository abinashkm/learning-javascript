const name = "Abinash"
const repoCount = 20

// console.log(name + repoCount + " Value"); now this is old version of calling any strings.

// Here this is the modern method. it is more readable and you could also apply method like to_upper_case. 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('abinash-hc-com')
// see in this we are using new string syntax the reason being behind is that it will allow us to use string properties like charAt etc.
// console.log(gameName[0]);
// console.log(gameName.__proto__); if we run this in chrome console than it will show all the methods.


// console.log(gameName.length); property of string that will provide length of it. new string("abinash") it's length is 6.
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('b'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));