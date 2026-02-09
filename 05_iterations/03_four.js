// operatin on object

const myObject = {

    js: "javascript",
    cpp: "c++",
    rb:  "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {

    // console.log(key);// for key only
    // console.log(myObject[key]);// for value only
  
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
    
}

const programming = [ "js", "rb", "py", "java", "cpp"]

for (const key in programming) {
console.log(key);

}

// The "Which Loop?" Guide
// Loop,Best For...,What it gives you
// for...in,Objects,The Keys (strings)
// for...of,Arrays,The Values (the actual data)

// The Real-World Logic: Why use for...in?
// In a professional setting, you rarely use for...in for arrays. 
// You use it when you receive an object from a database 
// and you don't know what the keys are ahead of time.
//  It allows you to dynamically extract data like you did with your myObject example

// In for...of, the variable (key) becomes the string "React", "Node", etc. In for...in, 
// the variable would just be 0, 1, 2, 3.

// for...in is like a Detective: It looks at the "hidden" property names of an object.

// for...of is like a Delivery Driver: It just picks up the actual "packages" (values) inside a list and hands them to you.

// Professional Tip: In modern JavaScript, we often use Object.values(userStatus).reduce(...) to get the total score in one line, but mastering the for...in loop first is essential for understanding how the engine actually works!