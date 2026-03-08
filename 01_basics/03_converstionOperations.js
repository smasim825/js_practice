let score = true
console.log(typeof(score)) // boolean
let valueInNumber = Number(score); //convert string to number type
console.log(typeof(valueInNumber)); //number
console.log(valueInNumber); //true = 1

/* convert string to number
 string = "33" ---> number=33
 string = "33abc" ---> number=NaN
 string = null ---> number=0
 string = undefined ---> number=NaN
 string = true/false ---> number= 1/0
 NaN means Not an Number. but it's type is a number
 */

 let isLog = 1;
  console.log(typeof isLog); //number
 let booleanVal = Boolean(isLog); //convert number to boolean
 console.log(booleanVal);
 console.log(typeof booleanVal);

//  number  = 1 ---> boolean = true

// |||||||||||||||||||||Operations||||||||||||||||||||||||||


/* in js it has some bugs , script check etc 
solution => typescript it just give me strict rules*/