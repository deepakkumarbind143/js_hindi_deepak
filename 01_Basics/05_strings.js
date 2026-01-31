const name = "Deepak "
const repoCount = 50

// console.log(name + repoCount + " marks");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`deepak-bind`)
//when you used new key word you used object

// console.log(gameName[0]);//d
// console.log(gameName.__proto__);


console.log(gameName.length);    //11 object always counts keys, so its start from 1
console.log(gameName.charAt(2));//e
console.log(gameName.indexOf('p'));//3

console.log( typeof gameName);//object



// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 5)
// console.log(anotherString);


// const newStringOne = "   deepak  "
// console.log(newStringOne.trim());


// const url ="https://deepak.com/deepak%20bind"

// console.log(url.replace('%20','-'));

// console.log(url.includes('deepak'))
// console.log(gameName.split('-'));
