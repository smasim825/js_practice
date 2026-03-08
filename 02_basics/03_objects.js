// singleton

// object literals

/* Object.create -->another method to create 
object where singleton created */

const mySym = Symbol("key1")

const JsUser = { //object is holding keys and values
    name: "Asim",  // name-->key and "Asim" -->value
    "fullname" : "sm asim",
    [mySym] : "mykey1", //the way to declare symbol inside object
    age: 18,
    location: "Dhaka",
    Email: "smasim825@gmail.com",
    isLoggedIn: false,
    lastLogInDays : ["Monday", "Saturday"]

} // we can store all types of data in objects
 console.log(JsUser.Email) // access object values through keys
 console.log(JsUser["Email"]);

/* no way to access the "fullname" and 
[mySym](symbol) in first way must have to 
choose 2nd way */ 
console.log(JsUser["fullname"]);
console.log(JsUser[mySym]);
JsUser.Email="asim29@gmail.com"

console.log(JsUser);
// Object.freeze(JsUser) //after this no change in object is counted

JsUser.Email="fb@gmail.com"
console.log(JsUser);
 
JsUser.greeting = function(){
    console.log(`Hello js user, ${this.name}`);
}
JsUser.greeting2 = function(){
    console.log(`Hello js user`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());