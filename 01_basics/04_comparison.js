// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

/** so above one are general comparison types */

// console.log("2" > 1);
// console.log("02" > 1);
/** The output of this are true, because JS convert those string into number and compare
 * This can be hassle when you want to get expected value but you don't.
 * SO IT'S BEST TO ALWAYS USE SAME DATA-TYPE FOR COMPARISON.
 */

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === not only check it value but also check its datatype thus strictly check.

console.log("2" === 2);

/* We are getting different output because the EQUALITY CHECK AND
THE COMPARISON < > WORKS DIFFERENTLY.
Comparison turns null to number and treat it as 0.
THAT'S WHY NULL>=0 ID TRUE AND NULL>0 IS FALSE.
*/























