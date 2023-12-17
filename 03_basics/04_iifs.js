// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// This pattern allows you to encapsulate variables and functions within a self-executing function,
// providing privacy and protection for those variables/functions from the global scope.
// As sometimes the global space have pollutions that we dont want in our functions.

// syntax:  (function)();
// semicolon is very imp as the iife don't know when to stop so it may show error.


(function name(){
    // named iffe bcz func ka name h.
    var privateVar = "I am private!";
    console.log(privateVar);
})();

(() => {})(); // syntax for arrow function 