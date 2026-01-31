//for of 

// ["", "", ""]//list of string
// [{}, {}, {}]//list of object


const arr = [1, 2, 3, 4, 5]

for (const element of arr) {
    // console.log(` this is the elements of list ${element}`);
    
}

// Maps

const map = new Map()// map know for unics
map.set('IN', "INDIA")
map.set('IN', "INDIA")//this will not count and come as output
map.set('USA', "United States of America")
map.set('Fr', "France")

// this will not work because map is not itterable
// for (const key in map) {  
// console.log(key);
// }

// console.log(map);


//intresting [] use this and assign key and value to print any
for (const [key, value] of map) {
    // console.log(key);
    // console.log(key, `:-`, value);//this one print both
    
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {  // this for loop not work on objeect
//     console.log(key);
    
// }
