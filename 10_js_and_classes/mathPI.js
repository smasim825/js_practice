// we have direct access of object

const dscpt = Object.getOwnPropertyDescriptor(Math,"PI") // know hidden featues of object

// console.log(dscpt); Math.PI is hardcore value property which cannot change means not writeable

console.log(Math.PI);
Math.PI=5;
console.log(Math.PI);


// lets create some hardcore object property which cannot change 

const asim = {
    name: "smasim",
    id : "102",
    isavb : "true",
}
console.log(Object.getOwnPropertyDescriptor(asim,"name"));
Object.defineProperty(asim,"name",{
    writable : true,
    enumerable : false,
})
console.log(Object.getOwnPropertyDescriptor(asim,"name"));

for(const [key,value] of Object.entries(asim)){
    if(typeof value !== 'funtcion'){
    console.log(`${key}: ${value}`)
    }
}