// Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0 , 23);
// let myCreatedDate = new Date(2023, 0 , 23,5,3);
let myCreatedDate = new Date("1-20-2025");
// console.log(myCreatedDate.toLocaleString());

let mytimeStamp = Date.now()
// console.log(mytimeStamp);

//mili secon conversions
// console.log(myCreatedDate.getTime());

//second conversion

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})