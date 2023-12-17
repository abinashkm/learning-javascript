// TOPIC: THIS

const object = {
    username: "abinash",
    age: 25,

    welcomeMessage: function(){
        console.log(`Hello ${this.username}!`);
        // console.log(this);
    }

}
object.welcomeMessage();
object.username = "sam"
object.welcomeMessage()

// THIS: it refer to current context.
// means ye jis bhi object,ya {} uske andar context hoga usko refer karega.
// agar me object ke andar console.log(this) karta hun to wo muje sab current context dega.
//THIS DOESN'T WORK INSIDE A FUNCTION ONLY INSIDE OBJECT.

/**BUT agr me srf console.log(this) karu outside {}.
 * wo muje {} === empty object show karega. 
 * bcz globally hamne abhi koi bhi context nhi dia h.
 * ab ye node me empty object deta h.
 * but chrome console me windows object krke ayega.
 * reason being behind ki the chrome console have inbuilt objects that carry the works.
 */

// console.log(this);

/** ARROW FUNCTION */

function one() {
    // general syntax of function.
}

() => {} // normal syntax of arrow func.

const add = (num1, num2) => {
    return num1 + num2;
} // if we use {} than we have to write return.

console.log(add(4,6));


const minus = (num3, num4) => num4 - num3 // in this way the node automatically take return so no need to write but it only work for single line.

console.log(minus(8,9));

const multi = () => (b*a) // u can write this way also. 

// keep in mind that only after => using {} we have to use return statement.

const name = () => ({username:"abinash"})
console.log(name());