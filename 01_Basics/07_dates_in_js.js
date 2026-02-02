// Dates

let myDate = new Date()
// console.log(myDate.toString());//2026-02-02T04:49:21.794Z
// console.log(myDate.toDateString());//Mon Feb 02 2026
// console.log(myDate.toLocaleString());//2/2/2026, 10:19:36 am

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0 , 23);
// let myCreatedDate = new Date(2023, 0 , 23,5,3);
let myCreatedDate = new Date("1-20-2025");
// console.log(myCreatedDate.toLocaleString());//It formats the date according to your system’s locale.

let mytimeStamp = Date.now()
// console.log(mytimeStamp);//1770008445251

//mili secon conversions
// console.log(myCreatedDate.getTime());//this will give 1737311400000

//second conversion

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);

// console.log(newDate.getMonth());
// console.log(newDate.getDay()); 1 beacuse today is monday

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))
