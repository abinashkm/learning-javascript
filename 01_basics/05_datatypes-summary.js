/** There are two types of datatypes-
 * Primitive
 * Non-Primitive
 * They are based on how are they being store in memory.
 */

//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
// console.log(typeof scoreValue); number

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false: it does not matter if the value is same or not but once you use symbol(), it will make them unique. Thus false.

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //arrays
let myObj = {
    name: "hitesh",
    age: 22,
} // object

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3







