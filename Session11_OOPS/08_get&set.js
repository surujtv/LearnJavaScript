/*
    JavaScript getters and setters are special methods that provide access to object properties. Getters are used to read values of properties, while setters are used to write values to properties.

    getters can be created by using get keyword
    setters can be created by using set keyword

    Syntax-->
    get --> when we want to get manipulated data from object.
    set --> when we want to set data inside object after manipulation.

    NOTE: inhe functions ki tarah call nahi krna padta properties ki tarah dot lagakr access kar sakte hai.
*/

class CreateUser{
    constructor(){
        this.firstName = ''
        this.lastName = ''
    }

    get getFullName(){
        return this.firstName + ' ' + this.lastName
    }

    set setFullName(fullname){
        let names = fullname.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }    
}

const user1 = new CreateUser()

user1.setFullName = 'Surendra jatav'    // iss fullName ko split karke firstName aur lastName m set karna hai

const fullName = user1.getFullName // getFullName function call Hoga

console.log(fullName)

console.log(user1)
