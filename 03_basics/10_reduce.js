// REDUCE
/** syntax
 *  const initialvalue = 0
 *  const sum = array.reduce( (accumulator, currentvalue)=>accumulator+current, initial);
 *  console.log(sum)
 */

// Simply put here we declare one initial value and than two parameters.
// accumulator that will store previous value.
// currentValue that will store the present value.

// example.

const num = [1,2,3,4,5]

const sum = num.reduce(function(acc,currval) {
    console.log(`acc: ${acc} and currcal: ${currval}`);
    return acc + currval;
}, 0)
console.log('The sum is ' + sum)

// You can write the same thing using arrow function.
