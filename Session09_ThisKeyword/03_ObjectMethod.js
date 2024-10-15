// this keyword working inside an object 

"use strict"

let person = {
    name: "John",
    age: 30,
    sayHi: function() {
        console.log(this)   // this will refer to person object
        console.log("Hi, I am " + this.name);
    },

    getAge : ()=>{
        console.log(this)   // this will refer to the lexical scope context strict or non-strict mode doesn't matter 
        console.log("Hi, I am " + this.age + " years old")
    }
}

person.sayHi()
person.getAge()

// this behavior with arrow function file no 05 -  