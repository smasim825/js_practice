// reduce keyword for array 

const nums =[1,2,3,4,5,6,7,8,9,10];

let initialval=0; // sum=0;

const total = nums.reduce ( 
    (accumulator,currentvalue) => {
    console.log("Accumulator:", accumulator, "Current:", currentvalue);
    return accumulator + currentvalue;
    }, 
    initialval
);
console.log(total); 
const nums2 =[5,6,7,8,9,10,11,12,13];
const total2 = nums2.reduce( (accum,curr)=>accum+curr,0);
console.log(total2); 
 
const shoppingCart = [
   {
    itemName : "dev course ",
    price : 2999
   },
   {
    itemName : "dsa course ",
    price : 3999
   },
   {
    itemName : "cp course ",
    price : 5999
   }
]
const toprice = shoppingCart.reduce ( (accum,curr)=>curr.price+accum ,0)
console.log(`Bill to pay ${toprice}`);