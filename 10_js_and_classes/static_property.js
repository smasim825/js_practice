class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        return console.log(`USERNAME is ${this.username}`);
    }
    static createID(){ //whenever a user instance created a userid automatically generate
        return `123`;  // adding static prohebit the function to access
    }
}
const person = new User("asim");
// console.log(person.createID()); //no work as it is static

class Teacher extends User{
    constructor(username, email){
        super(username)    
        this.email = email
    }
}

const iphone = new Teacher ("iphone","iphone.com");
console.log(iphone.logMe());
console.log(iphone.createID()); // also not work here 