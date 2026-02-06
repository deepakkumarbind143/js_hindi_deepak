const user ={
    username: "deepak",
    logginCount: 6,
    signedIn: true,

    grtUserDetails: function(){
        // return "got user detail from database"
        // return `username: ${this.username}`
        return this
        
    }
}
// this is use for current context
// console.log(user.username);
// console.log(user.grtUserDetails());


// const promiseOne = new Promise()

// const date = new Date()

function User(username, logginCount, isLoggedIn) {
    this.username =  username
    this.logginCount = logginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        return `Welcome ${this.username}`
    }
    return this
}

const userOne = new User("deepak", 12, true)
const userTwo = new  User("raja", 11, false ) // this line overwrite the code

console.log(userOne.constructor);
// console.log(userTwo);
