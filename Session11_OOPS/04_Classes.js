/*
    classes - 
    In JavaScript, Classes define blueprints for creating objects with similar properties and methods. They offer a more structured approach to object-oriented programming.

    Classes are similar to functions. Here, a class keyword is used instead of a function keyword. Unlike functions classes in JavaScript are not hoisted. The constructor method is used to initialize. The class name is user-defined.

    constructor method - 
    The constructor method in JavaScript is a special method used for initializing objects created with a class.

    *NOTE: new keyword is must while calling classes.

    extends keyword - 
    super() constructor - 

    We creating Inheritance in this file - 
    
*/

// create a class - 

class CreateUserObject{
    constructor(firstName, lastName, age){
        console.log('Mai to chalunga hi chahe kuchh bhi karlo')
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
        this.hello = 'hii'
    }

    getFullName(){
        console.log(this)
        // return `${this.firstName} ${this.lastName}`   
        console.log(`${this.firstName} ${this.lastName}`)
    }
    greet(){
        console.log('Hello...')
    }
    greet1(){
        console.log('Hello...')
    }
    nayiMethod(){
        console.log('world')
    }
}


//NOTE: class k andar aur constructor k bahar jo methods bnayenge vo objects ke __proto__ m store ho jayegi

const user1 = new CreateUserObject('Surendra', 'Jatav', 26)
const user2 = new CreateUserObject('Sandhya', 'Dwivedi', 26)
const user3 = new CreateUserObject('John', 'Doe', 26)

console.log(user1.getFullName())
console.log(user2.getFullName())
console.log(user3.getFullName())
