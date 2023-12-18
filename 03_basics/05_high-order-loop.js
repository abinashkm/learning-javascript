// FOR OF

const arr = [4,5,6,7,8,9]

for (const num of arr) {
    //console.log(num)
}

// for (const iterator of object){}. 
// iterator: the value that you want to find.
// object: here means apko kaha apply karna h. it can be array, object or string.

const name = "Abinash Mohanty"

for (const letter of name) {
    //console.log(`Each letter in ${letter}`);
}

// MAPS

/** Map is similar to objects in js.
 *  The main difference is that: the key:value is taken in exact order.
 *  And there are no duplicates, so each of them are unique.
 */

const map = new Map()
map.set('a',1)
map.set('b',2)
map.set('c',3)
//console.log(map)

for (const key of map) {
    //console.log(key);
    // but this will print it in array form. what if we want separate value.
}

for (const [key, value] of map) {
    //console.log(key, ':=>', value);
    // a :=> 1 b :=> 2 c :=> 3
}

// but u can't iterate the object type same way.

const games = {
    game1: 'nfs',
    game2: 'wwe'
}

for (const [key, value] of games) {
    //console.log(key, value);
    // output: games is not iterable.
}