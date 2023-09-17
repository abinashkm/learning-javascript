"use strict"; 
// in previous days it was a headache to maintain the old code due to the newer updates.
// so to tackle it we use "use strict". what it does is it allows the engine to take all code as newer version.
//basically it treats all JS code as newer version.

// alert(3+3)// but we are in node js so it will not show any results while if we do the same in the chrome inspect console than it will.
//reason being behind is simple the JS is hidden in the web browser.
//we can also call alert in node but it has different syntax that we will read in future.


let name = 'abinash'// string 
let ages = 18 // int 
let password = false // boolean
let state = null // standalone value

// symbol => datatype use for react figma etc to assign unique value.
// object => is also datatype
// undefined is also a datatype.

console.log(typeof null); // the output => object. now this is imp question that when we try to find the type of datatype null is it shows object.