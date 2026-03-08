 const arr = [1,2,"asim", true]
 // in js we can store any type of data in a single array
 const a = [0,1,2,3,4,5]

 console.log(a[2])

 // copy ==>Shallow Copy & Deep Copy
 // Shallow Copy ==> copy the reference point
 // Deep Copy ==> copy the value only 

 // In arrays of js copy of array is shallow copy 

 //Array Methods
 a.push(6); //push in at last
 a.pop();  // delete last element
 a.unshift(9); // add element at first
 a.shift() // delete the first element
 console.log(a.includes(9)); // check any element present or not
 console.log(a.indexOf(5)); // give the index

  console.log(a);

const b = a.join(); // convert array a to b (string)
console.log(b);
console.log(typeof(b));  // string

// Slice , Splice

console.log("A ",a);
const sl = a.slice(1,3); // print index 1 to 3-1
console.log(sl); 
console.log("B ",a);
const spl = a.splice(1,3);  // print index 1 to 3
console.log(spl); 
console.log("C ",a);

/* in case of splice it takes the fix range value and rest are as it is
 but in slice it takes the slice portion and main array is same ar before
*/
