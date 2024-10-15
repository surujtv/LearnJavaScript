// How this keyword behaves with the arrow functions because arrow function doesn't have it's own this binding like function keyword.

// "use strict"

console.log(this)   // working same as this inside getAge method

let person = {
    name: "John",
    age: 30,
    getAge : ()=>{
        console.log(this)   // this will refer to the lexical scope context strict or non-strict mode doesn't matter 
        console.log("Hi, I am " + this.age + " years old")
        // in this case this refers to window object
    }
}

person.getAge() // output - global object


//*=========================================

//let's see another case - 

let person1 = {
    name: "John",
    age: 30,

    getName: function(){
        console.log('GetName : ', this)   // this will refer to the lexical scope context strict or non-strict mode doesn't matter
        const getAge = ()=>{
            console.log('GetAge : ',this)   // this will refer to the lexical scope context strict or non-strict mode doesn't matter means it target to person1 object
            console.log("Hi, I am " + this.age + " years old")
            // in this case this refers to window object
        }
        getAge()
    }    
}

person1.getName()   // output - person1 object

//*==============================================

//let's see another case - 

let person2 = {
    name: "John",
    age: 30,

    getName: ()=>{
        console.log('GetName : ', this)   // this will refer to the lexical scope context strict or non-strict mode doesn't matter
        const getAge = ()=>{
            console.log('GetAge : ',this)   // this will refer to the lexical scope context strict or non-strict mode doesn't matter means it target to person1 object
            console.log("Hi, I am " + this.age + " years old")
            // in this case this refers to window object
        }
        getAge()
    }    
}

person2.getName()   // output - global object

//*==============================================

//let's see another case - 

let person3 = {
    name: "John",
    age: 30,
    getName: ()=>{
        console.log('GetName : ', this)   // this will refer to the lexical scope context strict or non-strict mode doesn't matter
        function getAge (){
            console.log('GetAge : ',this)   // this will refer to the lexical scope context strict or non-strict mode doesn't matter means it target to person1 object
            console.log("Hi, I am " + this.age + " years old")
            // in this case this refers to window object
        }
        getAge()
    }    
}

const getNameCopy = person3.getName.bind(person3)
getNameCopy()   // output - global object

//*NOTE: In arrow function this keyword will refers to its enclosed lexical context. 