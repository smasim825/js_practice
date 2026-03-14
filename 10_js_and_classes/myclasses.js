// ES6


//using class

// ES6


//using class

class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptPassword(){
        return `${this.password}`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("asim", "asm89#gm.com","123")
console.log(chai.encryptPassword());
console.log(chai);
console.log(chai.changeUsername());



// same using function (behind the scene)

function user(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}
user.prototype.encryptPassword = function(){
    return `${this.password}`;
}
user.prototype.changeUsername = function(){
    `${this.username.toUpperCase()}`;
}
const tea = new user("tea", "tea@fef","234");
console.log(tea.encryptPassword());
console.log(tea);
console.log(tea.changeUsername());

