const coding = ["js", "ruby", "java", "python", "cpp"]

//forEach is a array of method to iterate array

// const values = coding.forEach( (item)=>{
//   console.log(item);
//   return item;
// }
// ) 
// console.log(values); //undefined bcz forEach loop never return value

const nums =[1,2,3,4,5,6,7,8,9,10];

/* filter 
 A function that accepts up to three arguments (value: number, index:
  number, array: number[]). The filter method 
 calls the predicate function one time for each element in the 
 array. Returns the elements of an array that meet the condition 
 specified in a callback function. A callback function is a function 
 that is passed as an argument to another function and is executed 
 later */
const newNums = nums.filter( (nums) => nums > 4 ) 
console.log(newNums);
// forEach method doesnt return values of array but filter does


const newNums2 = nums.filter( (nums) => {nums>4} ) 
// here we use use curly bresis so return key word needed
// if only first brackets used then no need of return keyword
// curly bresis represet scope of the function
console.log(newNums2);

const newNums3 = []
nums.forEach ( (nums) => {
    if(nums>4){
        newNums3.push(nums)
    }
})
console.log(newNums) // forEach loop checks numbers > 4 or not and push them into a new array newNums3
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')
// bk is a object of books array
  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);