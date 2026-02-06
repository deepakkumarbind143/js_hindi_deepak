// let myname = "hitesh  "
// // console.log(myname.trim().length) // we use alternative


// console.log(myname.trueLength());

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        return console.log(` Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.deepak = function(){
    return console.log(` deepak is present in all object`);
}

Array.prototype.heyDeepak = function(){
    console.log(`deepak says hello`);
    
}
// heroPower.deepak()

// myHeros.deepak()
// myHeros.heyDeepak()
// heroPower.heyDeepak()// this will not have power because it is out of path


// inheritance

const user = {
    name: "deepak",
    email: "deepak@bind.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport =  {
    isAvailable: false
}

const TASupport = {
    makeAssignment: `JS assignment`,
    fullTime: true,
    //this will give acces of TeachingSupport
    __proto__: TeachingSupport


}

Teacher.__proto__ = user


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "deepakkumar     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(` thre lenght is :${this.trim().length}`);
    
}

anotherUsername.trueLength()
"deepak".trueLength()
"iceTea".trueLength()