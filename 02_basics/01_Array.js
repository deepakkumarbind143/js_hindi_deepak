// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHero = ["deepak", "bhai"]
const myArr2 = new Array(1, 2, 3, 4) 
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift(9)

// console.log(myArr.includes(9));//return thrue of false by checking number exist or not
// console.log(myArr.indexOf(3));//if number not exist then the output will be -1

// const newArray = myArr.join()

// console.log(myArr);
// console.log(  newArray); 


//### topics that is intresting

//slice, splice 
console.log("A ", myArr);

//slice
const myn1 = myArr.slice(1, 3)//count till last-1 thet is 1,2
console.log("B ", myArr);
console.log(myn1);
//splice
const myn2 = myArr.splice(1, 3)//count till one to last i.e 1. 2. 3
console.log("c", myArr);//in spilce it remove the value from list
console.log(myn2);



