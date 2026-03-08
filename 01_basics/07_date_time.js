let mydate = new Date();
console.log(mydate);
console.log(mydate.toString()); //Sat Jan 31 2026 19:00:09 GMT+0600 (Bangladesh Standard Time)
console.log(mydate.toDateString()); // Sat Jan 31 2026
console.log(mydate.toLocaleString()); //1/31/2026, 7:00:09 PM
console.log(mydate.toLocaleDateString()); // 1/31/2026
console.log(mydate.toTimeString()); //19:03:15 GMT+0600 (Bangladesh Standard Time)
console.log(mydate.toISOString()) //2026-01-31T13:04:03.225Z
console.log(mydate.toJSON()) ////2026-01-31T13:04:03.225Z
console.log(mydate.getTimezoneOffset()) //-360

let mycreateDate = new Date("12-14-2023"); //Thu Dec 14 2023
let mycreateDate2 = new Date(2023, 0 ,12); //Thu Jan 12 2023
console.log(mycreateDate.toDateString())
console.log(mycreateDate2.toDateString())

let mytimeStamp = Date.now();
console.log(Math.floor(mytimeStamp/1000));

console.log(mycreateDate2.getTime())
 
//prefer .toDateString() or .toLocaleDateString()

 
let newDate = new Date();
console