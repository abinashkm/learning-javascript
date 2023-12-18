// FOR IN
// roughly speaking u cant apply forof for objects.

const myObjects = {
    name: 'John',
    1: 'Doe',
    2: 'Smith'
}

for (const key in myObjects) {
    // console.log(key); u will only get keys
    // console.log(myObjects[key]); u will get value.
    // console.log(`${key} this key indicates this value: ${myObjects[key]}`);
    
}

// what if we apply FOR-IN in array.
// array have there keys too that its position: 0,1,2 etc.
const myArray = ['John', 'Doe', 'Smith'];

for (const key in myArray) {
    console.log(`This is the element on the position ${key} of the value: ${myArray[key]}`);
}