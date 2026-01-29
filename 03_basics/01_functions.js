function myName(){
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    console.log("A");
    console.log("K");
}

// myName() //**myname is refference and myName() is the fuction call
function addTwoNumber(number1, number2){//function defination with parameters
console.log(number1 + number2);
}
// addTwoNumber(3,5)//function call with arguments


//* 
function addTwoNumber(number1, number2){
// let result = number1 + number2
// return result
return number1 + number2

}
const result = addTwoNumber(4, 6)
// console.log("Result: ", result);// this will give undefine output 

function loginUserMessage(username = "bro"){
    if(!username){
        console.log("please enter user name");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage('deepak'))