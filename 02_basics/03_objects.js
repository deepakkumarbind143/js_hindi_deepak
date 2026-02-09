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

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js User")
}
JsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`)
}

console.log(JsUser.greeting());//this will give output of function ,and if you avoid using method() it will give refernce
console.log(JsUser.greeting2());




//


// A. Accessing Data
// There are two ways to get data out of an object. You must know both:

// Dot Notation: intern.firstName (Used 90% of the time).

// Bracket Notation: intern["firstName"] (Used when the property name is stored in a variable).

const myage = "age";

const intern = {
  
  firstName: "deepak",
  age: 21,
  skills: ["javascript", "html"],
  isReady: true,
  // a function inside object is called method
  greet: function(){
     return "hello, i am ready to code";
  }
};

console.log("-----------DESTRUCTURING---------")

const {firstName, age, skills, isReady, greet} = intern

console.log(firstName)
console.log(age)
console.log(skills)
console.log(isReady)
console.log(greet())

console.log("-----------UPDATING AND ADDING---------")

intern.skills[2] = "dart"
intern.isReady = false
intern.greet = function(){

  return "hello its an update"
}
console.log("-----------PRINITING ELEMENT OF ARRAY---------")

 intern.skills.forEach((str)=> console.log(str))
 let allarray = intern.skills.map((str)=> str)
console.log(allarray)
console.log(intern.isReady)
console.log(intern.greet())

console.log("-----------SPREAD OPERATORS---------")


const updatedinter = {
  ...intern,
  isReady :true,
  firstName: "noname"
}

 const { isReady : ready, firstName : name} = updatedinter;
console.log(ready)
console.log(surname)
// Spread (...) creates a new object.
// The old object (intern) stays exactly the same.
// , you could use Object.defineProperty() to make just that one property "writable: false


// Old way (still valid)
// function greet(user) {
//   console.log(user.username);
// }


// Modern / internship way
// function greet({ username }) { //is just destructuring happening immediately.
//   console.log(username);
// }

// t’s equivalent to:

// function greet(user) {
//   const { username } = user;
//   console.log(username);
// }


// function printProfile({ username, email }) {
//   console.log(username, email);
// }

// printProfile({
//   username: "noName",
//   email: "test@mail.com",
//   age: 25
// });

// Key rule

// Arrow functions do NOT have their own this

// They borrow this from the outer scope.

// or don’t destructure methods that use this.
//optional solution == greet.call(user);
