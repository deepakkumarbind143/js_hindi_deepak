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