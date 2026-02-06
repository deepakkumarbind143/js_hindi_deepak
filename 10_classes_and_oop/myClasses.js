// //ES6

// class user {
//     constructor (username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
        
//     }
    
//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return ` ${this.username.toUpperCase()}`
//     }
// }


// const deepak = new user("chai", "deepak@gmail.com", "123")
// console.log(deepak.encryptPassword());
// console.log(deepak.changeUsername());


//behinf the scene


function user(username, email, password){
    
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
user.prototype.changeUsername = function(){
    return `${this.username}`
}
const kumar = new user("chai", "bhai@gmail.com", "123")
console.log(kumar.encryptPassword());
console.log(kumar.changeUsername());