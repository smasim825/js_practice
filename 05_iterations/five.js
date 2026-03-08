// forEach examples

//forEach is an array method
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (i){
//     console.log(i);
// } )

// coding.forEach( (i) => {
//     console.log(i);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)
 
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


// array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} ) 