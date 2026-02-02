// array
//Arrays are a special type of object
const myArr = [0, 1, 2, 3, 4, 5]
const myHero = ["deepak", "bhai"]
const myArr2 = new Array(1, 2, 3, 4) 
// console.log(  myArr);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// console.log(myArr.unshift(9))//Adds element(s) to the start of the array
// console.log(myArr.shift())//Removes the first element of the array

// console.log(myArr.includes(9));//return true of false by checking number exist or not
// console.log(myArr.indexOf(3));//if number not exist then the output will be -1 or 3

const newArray = myArr.join()//Converts an array into a string

// console.log( myArr);
// console.log(  newArray); 


//### topics that is intresting

//slice, splice 
// console.log("A ", myArr);//A  [ 0, 1, 2, 3, 4, 5 ]

// //slice
const myn1 = myArr.slice(1, 3)//count till last-1 (3-1),that is 1,2
// console.log("B ", myArr);
//it does not change real array
// console.log(myn1);
// console.log(myArr);


// //splice
const myn2 = myArr.splice(1, 3)//count till one to last i.e 1. 2. 3
console.log("c", myArr);//in spilce it remove the value from list
console.log(myn2);



