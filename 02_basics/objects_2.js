const space = new Object() // this is the method to create a singleton object.

const universe = {} // this is another way to declare object.

universe.planets = 12345
universe.world = "earth"

console.log(universe);  // { planets: 12345, world: 'earth' }

/** NESTING OF OBJECTS */

const bluePlanet = {
    spaceId: 'ozone',
    nature: {
        forest: {
            trees: 333333333330
        }
    }
}

console.log(bluePlanet.nature.forest.trees); // in nested objects u have to specify each individual object from which u want ur value.

/** COMBINE OBJECTS */
let obj1 = {a: 1, b: 2}
let obj2 = {c: 3, d: 4}
let combinedObj = Object.assign({}, obj1 , obj2)
console.log(combinedObj);
//{ a: 1, b: 2, c: 3, d: 4 }
// So here concat or push dose not work. Only spread and assign works.
// most of the time we will use spread method.


/** ARRAY OF OBJECTS */

const arr1 = [
    {name:'John',
    hobbies:'art'},
    {name:'John',
    hobbies:'art'},
    {name:'John',
    hobbies:'art'}
]
console.log(arr1[0].hobbies); // to read objects inside array.

// NOW THERE ARE FEW IMPORTANT METHODS THAT WE USE SPECIALLY IN DATABASE.

console.log(Object.keys(universe)); // to read the keys
console.log(Object.values(universe)); // to get values from an object.
console.log(Object.entries(universe)) // to get key value pairs in an array.
console.log(universe.hasOwnProperty('world')); // to check if the required key exists or not.



// object destructure

const person = {
    name: 'abinash',
    age: 23,
    dob: 2000,
    city: "delhi"
}
const {dob: personal} = person 
console.log(personal);

//** This is how u destructure the object. */
{
    // this is json format and used for API.
    // now here key as well as value are stored in sting format.
    // "key": "value"
}

// now API can also be in Array format. 
[
    // inside here there can be objects
]


