// if (true) {
//     let a = 10
//     const b = 20
    
// }
// console.log(a);
// console.log(b);

/* it gives undefined because we cannot 
excess variables that declare inside an function
outside the function */ 
/* same variable can be declare inside and outside 
a function but gives different value */ 

let a = 39
if (true) {
    let a = 10
    const b = 20
    console.log("INNER a:",a) //10
    
}
console.log("OUTTER a: ",a) //39

// browser global scope and IDE(vscode) global scope are different

/* it is an example of closer where the child func can
access parent function */
function one(){
    const username = "asim"
    
    function two(){
        const website = "YT"
        console.log(username)
    }
    // console.log(website) // out of scope
    two()
}
one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); //same reason like function scope out of reach
}
// console.log(username); //same reason like function scope out of reach



// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}

// addTwo(5) 
 /* wrong its called hosting we cannot call 
  a function(variable) which is declare after it */
const addTwo = function(num){
    return num + 2
}
addTwo()