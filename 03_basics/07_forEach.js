// FOR-EACH 
// this is method where we declare a function without assigning the name.
// it will automatically go to the value and iterate.

const value = [1,2,3,4,5,6,7,8,9]

value.forEach(function (item){
    //console.log(item); this will provide the value.
})

// we can use arrow function too.

value.forEach(() =>{}) // as this is in one line we haven't use {}.

// u can also declare the function outside.

function num(value) {
    //console.log(value*2);
}
// value.forEach(num)

/// IMPORTANT OBJECTS INSIDE ARRAY.

const arr = [
    {names: 'joao', age: 20},
    {names: 'maria', age: 18},
    {names: 'pedro', age: 30}
]

arr.forEach((item)=>{
    console.log(`${item.names}`)
})