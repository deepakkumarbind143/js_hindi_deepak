class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCource(){
        console.log(` A new cource was added by ${this.username}`);
        
    }
}

const deepak = new Teacher("chai", "deepak@skfsmk0", "12344")

deepak.addCource()

const masalaChai = new user("masalChai")

masalaChai.logMe()

console.log(deepak instanceof user);

