const user = {
    _email: 'smsms@gmail.com',
    _password: "abs",
    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
         this._email = value;
    },
    get password(){         //get
        return this._password.toUpperCase();
    },
    set password(value){    //set
        this._password = value;
    }
}

const person = Object.create(user); // create object in basis of user 
console.log(person.email);
