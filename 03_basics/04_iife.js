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

// The Real-World Logic: Why use IIFE?
// In a professional setting, you use IIFEs for two main reasons:

// Global Pollution: If you are using a third-party library (like a map or a chart), you don't want your variables (like const data = ...) to accidentally overwrite the library's variables. The IIFE creates a "private room" for your code.

// Initial Setup: We often use them to start a database connection or initialize an app as soon as the script loads, without needing to call a function later.

// The Real-World Logic Recap
// Think of an IIFE as a "Disposable Function." * You need it to run right now.

// You don't need to call it again later.

// You want all the variables inside to disappear once it's done so they don't take up memory or clash with other scripts.