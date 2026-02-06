function SetUsername(username){
    //complex DB calls
    this.SetUsername = username
}

function createUser(username, email, password){
    //to hold refernce we use call
SetUsername.call(this, username)

this.email = email
this.password = password

}

const chai = new createUser("chai", "deepak@hmail.com", "123")
console.log(chai);
