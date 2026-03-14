function user (email,password){
    this._email=email;
    this._password=password;

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email=value;
        }
    })
    Object.defineProperty(this,'password',{
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password=value;
        }
    })
}

const person = new user("as8@.com","asb")
console.log(person.password);
console.log(person.email);

//function is function itself and object also.
