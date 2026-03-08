// Primitve
// -->7 types: string, number, boolean, null , undefined, symbol BigInt

const name = "asim"
const id = 123
const score = 123.4
const isLogged = false
const oustside = null
let userEmail
const key = Symbol('123')
const anotherKey = Symbol('123')
console.log(key === anotherKey) //false 
const bigNumber = 33458539595977n

// Reference Type(Non Primitive)
// --> Array, Object, Functions 
// all non primitive datatypes are object datatype


const heros = ["IronMan", "Thor", "Captain America"]
let myobj = {
   name: "asim",
   age: 22,
}

const myfunction = function(){
   console.log("I am IronMan"); 
}
console.log(typeof myfunction)
/* Js or Python is dynammic type C, C++, Java is Static 
   type beacuse in Js we dont have to mention the
   datatype of variables. there datatypes are determine during
   runtime
   but TypeScript is static because we have to mention
   the datatype of variables
*/



// |||||||||||||||||||||Memory||||||||||||||||||||||||||


/* Stack ->use in primitive type .
   when a variable declare we got a copy of the variable 
*/
/* Heap ->use in non-primitive type 
when a variable declare we got the reference of the variable 
*/

let userone = {
   email: "smasim825@gmail.com",
   api: "uuuuu",
}
let usertwo = userone //copy reference not value
usertwo.email="uuuu@gmail.com" // original value change not copy value
console.log(userone)