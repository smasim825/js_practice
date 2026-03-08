

//Immediately Invoked Function Expressions (IIFE)

//IIFE for function (named IIFE)
(function temp(){
    console.log(`yoy yo oy oy`);
})();

// temp()
/* it is a way to call a function here {temp} is function 
defination and {()} is function execution */
/* but in IIFE {first ()} is function defination and
{second ()} is function call */

//IIFE for arrow-function (unnamed IIFE)
(()=>{
    console.log(`yoy yo oy oy`);
})();

// IIFE for arrow-function + Argument (unnamed IIFE with parameter)
((name)=>{
    console.log(`${name} yoy yo oy oy`);
})('Asim');



