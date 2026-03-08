
const user = {
    username: "asim",
    price : 99,
    welcomeMsg : function(){
        console.log(`${this.username} welcome to website`);
        //if we use this-keyword, we dont have to take any argument parameter in function
        console.log(this); //it gives all current values (means inside the object)
    }   //this-keyword use for current context
    

    
}

// user.welcomeMsg()
// user.username = "sami"
// user.welcomeMsg()

console.log(this) //{} 
/* here empty object {} because no value but in browser it is 
not empty it gives a window object*/

function aimtron() {
    // let name = "asim"
    console.log(this); //this gives many global values
}
aimtron()

function aimtron2() {
    // let name = "asim"
    console.log(this.username);// undefined
}
aimtron2()

/* <------------------------------------> */

/* Arrow functions */

const aimtron3 = () => { //arrow function syntax
    console.log(this.username);// undefined also
    console.log(this); //{} gives empty
}
aimtron3()

// basic of arrow function () => {}

const addtwo = (num1,num2) => {
    return num1+num2;
}
console.log(addtwo(2,3))


// implicit return -> for one line statement (useful in React)
const addtwo2 = (num1,num2) => (num1+num2)
console.log(addtwo2(2,3))
/* here we use paranthesis instead of curly bracket
 thats why return not needed its called implicit return */


const username = () => { name: "asim" }
console.log(username()) // undefined
// undefined because to print obj we must wrap obj in paranthesis also 

const username2 = () => ({ name2 : "asim"})
console.log(username2()) // correct ✅

const myArr = [2,3,4,4,5,6]

