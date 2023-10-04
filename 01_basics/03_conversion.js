let score = 33

/*
so here if we see, we can see that its a integer or number datatype. but the main issue arises when
if the user input is in different format.
*/
console.log(typeof score)
//output: "number"
score= '10' //now this will be string type because of single quotes used for declaring it as String data-type and not Number
console.log(typeof score)
//output: "string"

// Now lets say we have to change the value of score again to string.
let valeOfNumber = Number(score)
console.log(typeof valeOfNumber)
console.log(valeOfNumber)

//output: "number" value: 10
// Suppose the value of score is changed to "10aa", will now also it will print number and what will be the value?

score = "10aaa"
console.log(typeof score)
// output : "string"
let value = Number(score)
console.log(typeof value)
// output : "number"
console.log(value)

// we can see that the value of score here comes out to be "NaN" but than why
// it changes from string to number and vice versa.
// Lets just say that in javascript it take the NaN value as number.

// here we also learn that initializing the any variable or data type does not change
// its value into new one if we don't declare it with the new value.


// now if we convert a value in Boolean.
// 1 => true ; 0 => false
// "" => false ; "anyValue" => true

// THIS ARE FEW OPERATOR FUNCTIONS

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

/* SO KEEP IN MIND THERE ARE FEW RULES TO FOLLOW WHILE CONVERSION AND ONE OF THEM 
IS THAT THE FIRST VALUE IF IS STING THAN THE WHOLE WILL BE TAKEN AS STING BUT IF THE STING IS IN LAST THAN 
THE RESULT WILL BE NUMBER */