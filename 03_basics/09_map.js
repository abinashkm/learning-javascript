// map function is also an call back function.
// it takes two arguments: 1) current value and 2) index of the element in array.
/** A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
Calls a defined callback function on each element of an array, and returns an array that contains the results. */

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const values = myNum.map((num)=>{
//     return num * 10;
// })

/** CHAINING: process to apply few methods one on one. */

const values = myNum.map((num)=>num*5).map((num)=>num/2).filter((num)=>num>=10)
console.log(values);

