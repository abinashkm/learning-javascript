/** Two declare an Object we generally have two methods.
 *  1. Literals mean: in this the object have multiple references. 
 *  2. Constructor mean: jab bhi ham ye use karke object banate h to wo "Singleton" me hota h. 
 *  "singleton": means ki wo abject unique h and it is of it's own one kind.
*/

// OBJECTS LITERALS

const mSym = Symbol("key1");

let object = {
    name : 'John',
    "new": 'abinash',
    age : 30,
    city : 'New York',
    [mSym]:"mohanty" //Here is the proper syntax to give value to symbol inside object and to access it too.

    
}

console.log(object); //{name: "John", age: 30, city: "New York"}

//console.log(object.name);

// this is a simple way but there is another way which is mostly ask during interview.
console.log(object["name"]); // Here you use brackets that have " " with key inside it.

// Now why we use this type of method? 

console.log(object["new"]);// Because if you want to access any value from a key that is written like "new" = "abinash".

console.log(object[mSym]); // keep in mind that u dont put symbol inside "".// also it is used to access any symbol data type.


// TO CHANGE KEY VALUE INSIDE OBJECT
object["city"] = "jaipur"
console.log(object)

// Object.freeze(object); // this will freeze the values so that it can not be changed.

/* FUNCTION */

object.greetings = function(){
    console.log(`Hello my Name is ${this.name}`);
};
console.log(object.greetings());

