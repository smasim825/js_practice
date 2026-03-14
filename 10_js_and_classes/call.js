function SetUsername (username){
    // complex DB call
    this.username = username;
    console.log("called");
}
function createUser(username,email,password){
    // SetUsername(username); //this call but after that its instance immedity stack popout  so we have to use .call
    SetUsername.call(this,username);
    this.email=email;
    this.password=password; 
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai); // this way username no set 