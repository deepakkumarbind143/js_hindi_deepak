const user = {
_email: 'deepak@gmail.com',
_password: "23434",

get email(){
return this._email.toUpperCase()
},

set email(value){
this._email = value
}
}

const tea = Object.create(user)
console.log(tea.email);


