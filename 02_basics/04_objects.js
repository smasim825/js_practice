const tinderUser = new Object()
const tinderUser2 = {}
/* both are empty objects but first
one is singleton object and 2nd one is
non-singlton object */

tinderUser.id = "123uu"
tinderUser.name = "sami"
tinderUser.isLog = "false"

console.log(tinderUser)

//print all keys and values 
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

// print keys and values combinely
console.log(Object.entries(tinderUser));

//check any key is present or not 
console.log(tinderUser.hasOwnProperty('isLog'))

const regularUser = {
    email : "sm98@gmail.com",
    fullname : {
        userfullname : {
            firstname : "asim",
            lastname : "sami"
        }
    }
}
// we can also create object inside another object
console.log(regularUser.fullname.userfullname.firstname)
// to excess nested object 

//combine objects
const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "a",
    4 : "b"
}
const obj3 = {obj1 , obj2}
console.log(obj3) // nested object creation not combine
const comb = Object.assign({} , obj1 , obj2);
/* the {} means all values of obj1 and obj2 stored in {}
// {} is the target.
 if not include {} only obj1 and obj2 then 
 all value go to obj1 (consider as target) */
console.log(comb)

// more simple method
const comb2 = {...obj1, ...obj2}

//array of object

const arrobj = [
    {
        name : "asim",
        id : 2304102
    },
    {
        name : "asim",
        id : 2304102
    },
    {
        name : "asim",
        id : 2304102
    },
    {
        name : "asim",
        id : 2304102
    }
]
// arrobj[1].name access any key value 

// ------------------------------------

// destructure objects
const course = {
    courseName : "js learn",
    price : "999",
    courseInstructor : "Asim"
}
// course.courseInstructor -->access any key of object
// to access more easily and shorted name.
const {courseInstructor: teacher} = course
console.log(teacher)

// React (similar use like desturcture object)
// const navbar ({company})=>{

// }
// navbar(company = "asim")


/* API give values in XML structure but now it
 gives values in json structure */

 //json -->object with no name ->example:

//  { //json example
//     name: "asim",
//     consumer: "sami",
//     price : "free"
//  }

/* sometimes we got APIs in form of Array 
more i can say it is a array of object */
// [ example of array of objects for APi
//     {},
//     {},
//     {}
// ]
