// if we want to use same lines of code again and again, than we can create a package that hold all those codes and can be called more times.
// now this package that we have created is known as functions.

//SYNTAX 

function myName(){
}

// myName => reference & myName() => execution  remember this as in DOM it is imp.

function addTwoNum(num1, num2){
    console.log(num1+num2);

}
// addTwoNum(5,6) => using console.log u can't store the result in any variable outside the scope.
// bcz it do not return any thing.

function addTwoNu(num0, num3){
    // either i can store in a variable => let result = num0 + num3 and return result.
    // or directly use return.
    return num0+num3
}

let sum = addTwoNu(4,7); // keep in mind that once u use return any other line of code after it will not work.
console.log(sum); 


// proper syntax with if condition.

function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("abinash"));


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) => [500,2000]
// HERE, ... is rest operator that bundle up the input inside an array
// Also here ...num1 out pot is only two bcz remaining other two are stored inside val1 and val2.

const user = {
    username: "abinash",
    prices: 199
}

function objectHandle(anyObject) {
    console.log( `Username is ${anyObject.username} the price ${anyObject.prices}`);
}
objectHandle(user);


// this is how u pass an object inside a function.

//SIMILARLY u can pass array like this.

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));