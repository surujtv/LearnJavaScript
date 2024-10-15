
// const getFullName = function(){
//     console.log(this)
//     // return `${this.firstName} ${this.lastName}`   
//     console.log(`${this.firstName} ${this.lastName}`)   
// }
// const greet = function(){
//     console.log('Hello...')
// }


function CreateUserObject(firstName, lastName, age){
    // this = {}
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age
    this.hello = 'hii'
    // return this
}

CreateUserObject.prototype.getFullName = function(){
    console.log(this)
    // return `${this.firstName} ${this.lastName}`   
    console.log(`${this.firstName} ${this.lastName}`)   
}

CreateUserObject.prototype.greet = function(){
    console.log('Hello...')
}


const user1 = new CreateUserObject('Surendra', 'Jatav', 26)
const user2 = new CreateUserObject('Sandhya', 'Dwivedi', 26)
const user3 = new CreateUserObject('John', 'Doe', 26)

// console.log(user1)
// console.log(user2)
// console.log(user3)


user1.getFullName()
user2.getFullName()
user3.getFullName()

console.log(user1.getFullName === user2.getFullName)

