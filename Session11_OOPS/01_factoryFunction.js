/*
    Definition - 
    a factory function is a function that returns an object. It's called a factory function because it creates and returns a new object each time it's called, just like a factory creates and produces new products.

*/

//Problem - 
//we have to create multiple objects for new users-
//solution - 


// function StaticPerson(){
//     return {
//         name: 'John',
//         age: 20
//     }
// }

// const user1 = StaticPerson()
// const user2 = StaticPerson()
// console.log(user1)
// console.log(user2)

//----------

// function DynamicPerson(name, age){
//     return {
//         name: name,
//         age: age
//     }
// }

// const user3 = DynamicPerson('Surendra', 26)
// const user4 = DynamicPerson('Sandhya', 25)
// const user5 = DynamicPerson('Sonal', 25)
// console.log(user3)
// console.log(user4)
// console.log(user5)


//===============================================

// problem - 2 method related  : memory m alag alag jagah per getFullName method store ho rahi h jo ki memory ko pulute kar rahi h 

// function CreateUser(firstName, lastName, age){
//     return {
//         firstName: firstName,
//         lastName: lastName,
//         age: age,
//         getFullName: function(){
//             return `${firstName} ${lastName}`   
//         }
//     }
// }

// // console.log(CreateUser)
// const user1 = CreateUser('Surendra', 'Jatav', 26)
// const user2 = CreateUser('Sandhya', 'Dwivedi', 25)
// const user3 = CreateUser('Anita', 'Jatav', 20)

// console.log(user1)
// console.log(user2)
// console.log(user3)

// console.log(user1.getFullName())
// console.log(user2.getFullName())
// console.log(user3.getFullName())

// console.log(user1.getFullName === user2.getFullName) //false

//=====================================================

// solution - for problem 2
const getFullName = function(){
    console.log(this)
    // return `${this.firstName} ${this.lastName}`   
    console.log(`${this.firstName} ${this.lastName}`)   
}
const greet = function(){
    console.log('Hello...')
}


function CreateUser(firstName, lastName, age){
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        getFullName: getFullName,   //memory address
        greet: greet
    }
}

const object = new Object()

// console.log(CreateUser)
const user1 = CreateUser('Surendra', 'Jatav', 26)
const user2 = CreateUser('Sandhya', 'Dwivedi', 25)
const user3 = CreateUser('Anita', 'Jatav', 20)

console.log(user1)
console.log(user2)
console.log(user3)


// // way - 1
// user1.getFullName()
// user2.getFullName()
// user3.getFullName()


// way - 2
// getFullName.call(user1)
// getFullName.call(user2)
// getFullName.call(user3)


console.log(getFullName())  // globally call kiya hai.

console.log(user1.getFullName === user2.getFullName)    // true - 


// problem - 3 global scope pullute ho raha h global m nahi rakhna h getFullName method ko
