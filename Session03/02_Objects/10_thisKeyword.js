/*
    THEORY -->
    this keyword in JS - Objects.
    
    1) In JavaScript, the "this" is a special variable that refers to the current object.
    It is used to access properties and methods of an object.
    
    2) The value of "this" depends on how it's called. If we call a method using an
    object (obj.method()), then "this" will refer to that object. If we use
    Function() instead of obj.method(), then "this" would be the global window
    object.
*/

//  PRACTICAL -->

// We can access property of another object inside our current objects.
// this keyword is used to access current object property.

let myDetails = {
    name: 'Surendra Jatav',
    age: 23,

    otherInfo: () =>{
        console.log("window: ", this)
        return `Hi my name is ${this.name} \nMy technical skills are ${mySkills.technical} \nMy Hobbie is ${hobbies.hobbie_1}`
    },
    normalFunction(){
        console.log("Normal Function : ",this)
        return `Hi my name is ${this.name} \nMy technical skills are ${mySkills.technical} \nMy Hobbie is ${hobbies.hobbie_1}`
    }
}

let mySkills = {
    technical: ['C', 'C++', 'HTML', 'CSS', 'JS'],
    softSkills: "quick learning"
}

let hobbies = {
    hobbie_1: 'Exploring' 
}

console.log(myDetails.otherInfo());
console.log(myDetails.normalFunction());