// merge array 

const a = [1,2,3,4,5];
const b = [9,8,7];
const c= a.concat(b); //merging
console.log(c);
const d = [...a, ...b]; //merging
console.log(d);

const hijibiji = [1,2,3,4,[5,6,7],8,[9,10,[11,12]]];
const fix_hijibiji = hijibiji.flat(Infinity); //fix hijibji
console.log(fix_hijibiji);

console.log(Array.isArray("ASIM"));  //check array or not
console.log(Array.from("ASIM"));  //convert to array

console.log(Array.from({name :"ASIM"})) 
/* IMPORTANT: it gives empty array because here the method
 from it confuse what will convert into  array  keys or values
  or other something
*/

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); // making array of diff variables