// Immediately Invoked Function Expressions (IIFE)

// to prevent from global scope polution we use iffi

(function bhai(){
    // it is names iifi
    console.log(" DB CONNECTED");
    
})();// the important semicolon 

// ()() this is the tric of iife

((name)=> {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('deepak');