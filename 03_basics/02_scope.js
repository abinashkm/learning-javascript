/** SCOPE => any value enclosed inside {}.
 *  There are two types of scope: Global & block/functional scope.
 *  Global scope => can access the value at any part of the program.
 *  Block scope=> can only be accessed inside the specific part.
 *  Like: functions, objects etc.
 */

// GLOBAL SCOPE
var x = "I am global";

// BLOCK SCOPE
if (true) {
    let y = "I am in if block"; // I can't use `y` outside this block.
    }

/** That is why we don't use var.
 *  As it can be accessed outside of {} too.
 *  This generally follow the concept of HOISTING.
 *  It means that JS always keep the var at top, irrespective where it is declared.
 *  Also in let&const the naming can be same of two variable outside and inside.
 */

// keep in mind that the global scope if checked in window console(chrome).
// than it will be different from the console of node.

/** VERY IMPORTANT */

function car(){
    const name = "bmw"
    function brand() {
        const model = "m3"
        console.log(name + model);// here we can access the name bcz it's in parent block.
        
    }
    brand()
}
car();

// Remember that a child block can access the value of parent but parent cant access the value stored in child block.