const score = 400
// console.log(score);
/** dekho yaha hamne direct declare kr dia h ek value, normally js isko number 
 * ke tarha hi treat karega but sometimes hame exactly number hi chahye hota h.
 * us time ham "new number" use krke exactly num value le sakte h.
 */

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));
/** ab jab ham "Number" use karte h to uske sath kuch prototype/ methods bhi milte he.
 * like toString. jo ki use string me convert kr dega.
 * Ab "toFixed" method bohut use karte h specially jab ham koi ecomerce site bana rahe ho.
 * using this we can get exact decimal poit value. like 100.34342232 pe agr ham "toFixed(2)"
 * use karenge to wo 100.34 return karega.
 */

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));
// ye basically round off value deta h but isme decimal point se pehle priority dete h.
// yaha ham dhyan rakhna padega ki ham agr decimal round of kar rahe h to pehle wale num bhi count karenge.
// like console.log(otherNumber.toPrecision(4)); will give 123.9 and id we take 3 than it will 124.

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); comma laga hua ayega in indian standard. 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); will give positive value for all negative.
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // 0-1 ki bich me value dete h
console.log((Math.random()*10) + 1); // added 1 to get 1-9
console.log(Math.floor(Math.random()*10) + 1); 

// kabhi hame min and max ki value me num chahiye hote h so we use this formula. 
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)