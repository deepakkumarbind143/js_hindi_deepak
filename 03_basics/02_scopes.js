let a = 10
const b = 20
var c = 30

// console.log(a);
// console.log(b);
// console.log(c);


//DOM  => Document object model


//* Nested scope

function one(){
    const username = "deepak"

    function two(){
        const website = "youtube"
console.log(username);

        
    }
    // console.log(website);
    two()//if it not called than the function one will never executed

}

// one()

//++++++++++++++++++++++++++++++++interesting++++++++++++++++++++++++++++++

function addone(num){//it is function
    return num + 1
}

addone(5)

const addTwo = function(num){//it is function also called as expression
    return num + 2
}

addTwo(5)