function sayMyName(){
    console.log("A")
    console.log("S")
    console.log("I")
    console.log("M")
}

sayMyName()


// function can get argument and return some value

function addnum(num1,num2){
    return num1+num2;
}
const result = addnum(3,5);
console.log(result);

function logMsg (username){
    return `${username} just logged in`;
}
console.log(logMsg("asim")); 
/* if we dont pass any parameter here it gives
 undefind in place of name : asim  , so-*/
function logMsg (username){
    if(!username){ // or, username===undefined
        console.log("please enter the username")
    }
    return `${username} just logged in`;
}

//default value parameter
function logMsg (username = "sami "){// never undefined
    return `${username} just logged in`;
}

function calPrice(...num1){
    /* ...num is rest operator it return the 
    any number of parameters which is given 
    in form of array */
   return num1
}
console.log(calPrice(200,300,400));

function calPrice2(val1 ,val2,...num1){
    /* ...num is rest operator it return the 
    any number of parameters which is given 
    in form of array */
   return num1
}
console.log(calPrice2(100,200,300,400)); 
// output - [ 300, 400 ] because num1 and num2 takes 100 and 200 


// pass obj in function

const user = {
    username : "asim",
    price : 199
}

function handleObj (anyObj){
   console.log(`username is ${anyObj.username} and price is ${anyObj.price}`);
}

handleObj(user);