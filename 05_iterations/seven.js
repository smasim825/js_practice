const nums =[1,2,3,4,5,6,7,8,9,10];

const newNums = nums.map( (nums)=> nums+10)
console.log(newNums); // ok 

const newNums2 = nums.filter( (nums)=> nums+10)
console.log(newNums2); // not ok . filter doest modify values it just check values 

// chaining combination of map and map or map and filter 

const newNums3 = nums
                    .map((nums)=> nums*10) // making all *10        
                    .map((nums)=> nums+1)  // making the latest updated values all +1 
                    .filter((nums)=> nums>40)
console.log(newNums3);