// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score= 100
const scoreValue= 100.0
const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId= Symbol('123')

// console.log(id === anotherId);

const bigNumber = 455233261424224326112n




// Reference (Non Premitive)

// Array, Object, Functions 


const heros = ["shaktiman", "naagraj", "doga"];

 let myObj = {
    name :"deepak",
    age:22,
}

 const myFunction = function(){
    console.log("hello World");
    
 }

 console.log(typeof id);
 
 // +++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // Stack (primitive), Heap(Non-Primitive)
//in stack we get copies and in Heap we get refference of data