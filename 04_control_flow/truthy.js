const userEmail = []

if (userEmail) {
    console.log("got user email");
    
}else{
    console.log("Dont have user email")
}

//falsy values

// false, 0, -0, BigInt 0n, null, undefined, NaN

//truthy values

// "0", 'false', " ", [], {}, function(){},


if(userEmail.length ===0){
    console.log("Array is empty");
    
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10// it check safety ,if value is null than other output will come

// val1 = null ?? 10

val1 = undefined ?? 10

console.log(val1);


//terniary operator

// condition ? true : false

const icePrice = 100
icePrice >= 60 ? console.log("less than 80") : console.log("more than 80")
