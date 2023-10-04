const accountId = 12345
let accountEmail = "absjhfkh@gmai.com"
var password = '93u4'
accountCity = "new delhi"

let abinash; // now here we have not assigned any value so it will show undefined if we console it.

// Here we are learning about all this variables and there use case.
// Generally this are use to store some data in the memory space.

// Lets talk about const, so this is a fixed method where the assign value cant be changed. 

// Now lets change the value of let, var and account city.
accountEmail="ahajs@gmail,com"
password="09876"
accountCity= "mumbai"


console.log(accountId);

// now this is good way if you want to console.log() one var but if there are a lot of them than its better to use console.table([put ur var names])
console.table([accountId,accountEmail,password,accountCity, abinash]);


/*
Here the question arises that why use let,var, none when they do the same thing,
The reason behind this is that: var cant take scope properly.
now what is this scope, Scope == {} this curly brackets are scopes{block scopes and functional scopes}.
lets suppose for loop is used and we mistakenly run it for accountId than this will change the value of each and every var that is of same name.

now to tackle this "let" was introduced. 

**** so basically js have only two variables : const And let.

*/