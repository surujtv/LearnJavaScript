//This - 

/*
    this - current object ko target kart hai..    
*/


// How this keyword behaves in global scope - 

// console.log(this)   // output - window object.(browser)

// window.alert('Hi sandhya')
// alert('Hi Sandhya')
// this.alert('Hi sandhya')    // teeno ek jaise hi kaam karenge.

/*
    *Global scope m window object ko target karega
*/

//==============================================

// How this keyword behaves in Function scope - 

// "use strict"

// function SayHi() {
//     console.log(this)   // window object   
// }

// // SayHi()
// window.SayHi()  // strict or non-strict mode doesn't matter it will refers to window object.

/*
    
    *inside Function - 
        *strict mode -  this ki value undefined hogi
        *non-strict mode -  this ki value window object hogi

    *this behavior also depends on How function will be called
        *strict mode -  this ki value window object hogi
        *non-strict mode -  this ki value window object hogi

*/

//============================================

// How this keyword behaves in methods - 

// const user = {
//     name: 'Sandhya',
//     age: 25,
//     sayHi: function() {
//         console.log(this)   // this refers to user object strict non-strict mode doesn't matter
//     },
//     arrow: () =>{
//         console.log(this)   // this refers to window object
//     }
// }

// user.sayHi()


//this keyword check karega ki mai jis function ke andar present hu vo function kis object ke andar present hai. then this keyword usi object ko target karega.  

//============================================

// How this keyword behaves with the arrow functions because arrow function doesn't have it's own this binding like function keyword.


const user1 = {
    name: 'Sandhya',
    age: 25,
    sayHi: function() {
        console.log(this)   // this refers to user object strict non-strict mode doesn't matter

        const arrow = () =>{
            console.log(this)   
            // *this will also refers to user object because of it's inside the sayHi function to sayHi function mai this ki jo value hogi vahu value arrow function k this ki bhi hogi.
        }

        arrow()
    },
}

user1.sayHi()

//---------------------------

const user2 = {
    name: 'Sandhya',
    age: 25,
    sayHi: ()=> {
        console.log(this)   // this refers to window strict non-strict mode doesn't matter

        const arrow = () =>{
            console.log(this)   // this refers to window object
        }

        arrow()
    },
}

user2.sayHi()

//---------------------------

const user3 = {
    name: 'Sandhya',
    age: 25,
    sayHi: ()=> {
        console.log(this)   // this refers to window strict non-strict mode doesn't matter

        function arrow () {
            console.log(this)   // this refers to window object

        }

        arrow()
    },
}

user3.sayHi()

/*
    Conclusion - 
    NOTE: this will also refers to user object because of it's inside the sayHi function to sayHi function mai this ki jo value hogi vahu value arrow function k this ki bhi hogi.
*/

//============================================

// call apply and bind methods - 

//scenario - suppose we have an object and that object has a method and we want to access that method in another object then we will use call apply and bind method- 


const person1 = {
    firstName : 'Sandhya',
    lastName: 'Dwivedi',

    // fullName: function () {  //without parameter
    //     console.log(this)
    //     console.log(this.firstName + ' ' + this.lastName)
    // }

    fullName: function (age, address) {  //with parameter
        console.log(this)
        console.log(`${this.firstName} ${this.lastName} and my age is ${age} address - ${address}`)
    }

}

const person2 = {
    firstName : 'Surendra',
    lastName: 'Jatav'
}
const person3 = {
    firstName : 'john',
    lastName: 'doe'
}

//call method -----------------------

//without parameter - 
// person1.fullName()   
// person1.fullName.call(person2)
// person1.fullName.call(person3)

//with parameter - 
// person1.fullName(25, 'Sausar')
// person1.fullName.call(person2, 23, 'Indore')
// person1.fullName.call(person3, 30, 'pata nahi')

//apply method -----------------------

// without parameter - 
// person1.fullName()   
// person1.fullName.apply(person2)
// person1.fullName.apply(person3)

//with parameter - 
// person1.fullName(25, 'Sausar')
// person1.fullName.apply(person2, [23, 'Indore'])
// person1.fullName.apply(person3, [30, 'pata nahi'])

//----------------------------

//bind method - 

// without parameter - 
// person1.fullName()   
// const object2 = person1.fullName.bind(person2)
// // console.log(bindedFunction)  
// object2()
// const object3 = person1.fullName.bind(person3)
// object3()

//with parameter - 
// person1.fullName(25, 'Indore')   
// const object2 = person1.fullName.bind(person2)
// // console.log(bindedFunction)  
// object2(26, 'Indore')
// const object3 = person1.fullName.bind(person3)
// object3(30, 'pata nahi')


//NOTE: these three methods doesn't work on arrow functions.

//============================================

//Production code to bind method with different objects which can be reusable-

const printFullName = function () {   //it's all about function keyword
    console.log(this)
    console.log(`Hi I am ${this.firstName} ${this.lastName} and I am from ${this.city}, ${this.state}!`)
}

const student1 = {
    firstName : 'Surendra',
    lastName: 'Jatav',
    city: 'Indore',
    state: 'MP'
}
const student2 = {
    firstName : 'Sandhya',
    lastName: 'Dwivedi',
    city: 'Indore',
    state: 'MP'
}

// printFullName.call(student1)
// printFullName.call(student2)

// printFullName.apply(student1)
// printFullName.apply(student2)

// printFullName.bind(student1)()
// printFullName.bind(student2)()

//Completed.