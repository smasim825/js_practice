const score = 400;
console.log(score);
const balance =new Number(100);
console.log(balance); 
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const othernum = 123.856;
console.log(othernum.toPrecision(2));

const hundred = 1000000;
console.log(hundred.toLocaleString());


// |||||||||||||||||||||Maths||||||||||||||||||||||||||
 

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.floor(4.2));
console.log(Math.ceil(4.2));
console.log(Math.round(4.49));
console.log(Math.max(1,6,7,3,2));
console.log(Math.min(1,6,7,3,2));
console.log(Math.random(1,6,7,3,2));
console.log(Math.floor((Math.random()*10))+1); //gives any random value from 1 to 10
const max=20;
const min=10;
console.log(Math.floor(Math.random()*(max-min+1))+min); 
// to get value within a fixed interval.

