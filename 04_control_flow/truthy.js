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

// The Real-World Logic: Why these "Truthies" matter
// The Empty Array Trap: As you noted, if ([]) evaluates to true. This is why we always check if (arr.length === 0) when we want to see if a list is empty.

// Nullish Coalescing (??): This is a lifesaver for APIs. If a user doesn't have a profile picture, the API might send null. You use ?? "default-avatar.png" to ensure your app doesn't break.

// Ternary Operator: We use this constantly in React to show or hide elements (e.g., isLoggedIn ? <LogoutBtn /> : <LoginBtn />).

// The Real-World Logic Recap
// Safety First: In the office, we often use ?? for numbers and booleans because 0 and false are often "correct" values that we don't want to overwrite with a default.

// The "Empty Object" Check: Always remember that Object.keys(obj).length === 0 is the standard way to check for an empty object. Just checking the object itself will always return true!