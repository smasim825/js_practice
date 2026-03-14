// class user {
//     constructor(username,password){
//      this.username = username,
//      this.password = password
//     }
//     get password(){      //get
//         return this.password.toUpperCase();
//     }
//     set password(value){    //set
//         this.password = value; //here both construct and it set password so here maximum stack call will exceed
//     }
// }


class user {
    constructor(username,password){
     this.username = username,
     this.password = password
    }
    get username(){
        return this._username.toUpperCase();
    }
    set username(value){
         return this._username = value; // here underscore use to create difference in constructor and getter setter
    }
    get password(){         //get
        return this._password.toUpperCase();//so get can modify values 
    }
    set password(value){    //set
        this._password = value; //here both construct and it set password so here maximum stack call will exceed
    }
}

const person = new user("asim","abs");
console.log(person.password);
console.log(person.username);

//getter setter when i dont want to give any property
// we can apply getter or setter on any property of the class
// getter and setter use should be combine

