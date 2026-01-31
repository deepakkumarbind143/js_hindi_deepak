const mynumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = mynumber.map((num)=> num + 10)

// intresting

const newNums = mynumber
        .map((num)=> num * 10) /// first array will form with multiplication of 10
        .map((num)=> num + 1)// array will update with num +1 and store as final value
        .filter((num)=> num >= 40)// use for thrue or false work
console.log(newNums);