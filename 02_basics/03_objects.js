//singleton (its become from construction , its never become from literal)


//object literals

const mysym = Symbol("key1")

const JsUser = {
    name: "Deepak",

    "full name": "Deepak kumar ",

[mysym]: "this is symbol check",//this is the syntacks of assigning symbol as a key
    age: 23,
    emailId: "deepak@gmail.com",
}

// console.log(JsUser.name);
// console.log(JsUser["emailId"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);//you have to print sumbol woth [] bracket without quatation
// console.log( typeof JsUser[mysym]);//this will give string output because the value is string

JsUser.emailId = "newemail@gmail.com"//this is the way to overwrite object value

// Object.freeze(JsUser);//it will freeze the change 
// JsUser.emailId = "willnnnnoteUpfdate@gmail.com"

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js User")
}
JsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`)
}

console.log(JsUser.greeting());//this will give output of function ,and if you avoid using method() it will give refernce
console.log(JsUser.greeting2());


