//ARRAYS
/**
 * 1. Arrays in java-scripts are re-sizable.
 * 2. It can also take different Data-types as input.
 * 3. JS array-copy operations create shallow copies. 
 * 4. A shallow copy of an object is a copy whose properties share
   the same references (point to the same underlying values) as
   those of the source object from which the copy was made. 
   As a result, when you change either the source or the copy,
   you may also cause the other object to change too-and so,
   you may end up unintentionally causing changes to the source or
   copy that you don't expect.
 */

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) ++++++ it add the 9 in beginning of array.
// myArr.shift() +++++++ this removes one element from the start of array.

// console.log(myArr.includes(9)); // it will give false as 9 dont exist in array.
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() ** it change the datatype to string.

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

/********* interview ask- differentiate btw slice and splice
 *  the main difference is that in slice we get the output but there is changes to main array but in splice we get output from range to range and also the main array changes as it exclude the splice one.
 */