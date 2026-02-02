// const tinderUser = new Object() // singleton object
const tinderUser = {}// non singleton object(literal object)

///way to assign key and values
 tinderUser.id= "123abc"
 tinderUser.name = "sammy"
 tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUsers = {
    email: "some@gmail.com",
    fullName: {
userfullName: {
    firstName: "deepak",
    lastName: "kumar bind"
}
    }
}

// console.log(regularUsers.fullName.userfullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 5: "b"}
//*
// const obj3 = {obj1, obj2} //this will store object inside object

//*
// const obj3 = Object.assign({}, obj1, obj2) //it will work  with this {},but you can avoid the target

//*
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [

{
    id: 1,
    email: "h@gmail.com",

},
{
    id: 1,
    email: "h@gmail.com",

},
{
    id: 1,
    email: "h@gmail.com",

},
{
    id: 1,
    email: "h@gmail.com",

},
]

users[1].email // this is the way of calling object from list

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));// give array in array  where first one will be key and second one is value
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//check whether property is there or not

const course = {
    coursename: "js in hindi",
    price: "999",
    courceInstructor: "deepak"
}

//course.courseInstructor

//*object destucture happening here
const {courceInstructor: instructor} = course
console.log(instructor);



// JSON  formate (javaScript object noteation)
// {
//     "name": "deepak",
//     "course": "apnaCourse",
//     "proce": "free"
// }

[
    {},
    {},
    {},
    {},
]