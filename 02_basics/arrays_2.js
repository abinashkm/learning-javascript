const naruto = ["A", "B", "C"];
const saske = ["D", "E", "F"];

/** Here we created two new arrays both of same data-type.
 *  But can we combine this arrays ?
 *  Now to combine this arrays we can use two methods: push & concat.
 *  But both of them works differently lets see.
 */
naruto.push(saske)
console.log(naruto);

/** [ 'A', 'B', 'C', [ 'D', 'E', 'F' ] ] 
 *  The output here we can see is clearly different.
 *  as in push method it takes the second array as data-type.
 *  The issue is that its more a hectic to access the value.
 *  console.log(naruto[3][1]) you have to write like this to get the value "E".
*/


// Lets try with concat method
//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// Also we have to declare a new array to store concated one.
const num1 = [1,2,3,4]
const num2 = [5,6,7,8]
const num3 = num1.concat(num2);

console.log(num3);

// as we can see it's been merged {concat} together. output:= [  1, 2, 3, 4, 5, 6, 7, 8 ]

// There is 3 method in which we spread the array and put i together.
// now what is spread?
// Spread operator allows an iterable (like an Array or String) to be expanded in places where zero or more arguments are expected.
// basically suppose u have a glass and u throw it, so it will break into smaller pieces. 


const arr1=[0,9,8]
const arr2=[1,2,3]
console.log([...arr1,...arr2]); // output: [ 0, 9, 8, 1, 2, 3 ]

// NOW SUPPOSE YOU HAVE ARRAYS INSIDE ARRAY SO HOW WILL YOU COMBINE IT IN ONE ARRAY.
// TO THAT WE CAN USE ".FLAT"
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

let arr=[0,[1,2],[3,4],[5,6]]
let arr0 = arr.flat(Infinity) // it's a good practice to give exact depth but this also works. "depth=3" as we have 3 arrays
console.log(arr0)

// output: [  0, 1, 2, 3,  4, 5, 6 ]

console.log(Array.isArray("abinash")); // to check if the given var is array or not.
console.log(Array.from("abinash")); // this changes the string into array, ['a', 'b', 'i', 'n', 'a', 's', 'h'  ]

// now this may not work on this.
console.log(Array.from({name: "abinash"})); // now here it will show null array bcz we have not specified if we want to change the key"name" or the value"abinash" of the object.

let abi = 100
let bis = 200
let kis = 300

console.log(Array.of(abi,bis,kis)); //give an array of the number
