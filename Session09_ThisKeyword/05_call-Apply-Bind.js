// 1. call() method -

// scenario - suppose we have an object and that object has a method and we want to access that method in another object then we will use call apply and bind method-

let person1 = {
    firstName: "Sandhya",
    lastName: "Dwivedi",
    getFullName: function(city, state){
        console.log(this)
        console.log(`Hi I am ${this.firstName} ${this.lastName} and I am from ${city}, ${state}!`)
    }
}

person1.getFullName('Sausar', 'Madhya Pradesh')   // we can pass some arguments too

let person2 = {
    firstName: "Surendra",
    lastName: "Jatav"
}

// person2.getFullName() - this will give error because we don't have getFullName() method inside person2 object -
// so we need to call the method of person1 object inside person2 object - or we can reuse getFullName method for person2 object using call method 

person1.getFullName.call(person2, 'Indore', 'Madhya Pradesh')   
//value of this inside person1 will be override by person2 object
// we can pass some arguments too


//*===============================================

// 2. apply() method - this method works similar as call()


let person3 = {
    firstName: "Sandhya",
    lastName: "Dwivedi",
    getFullName: function(city, state){
        console.log(this)
        console.log(`Hi I am ${this.firstName} ${this.lastName} and I am from ${city}, ${state}!`)
    }
}

person3.getFullName('Indore', 'Madhya Pradesh')   // we can pass some arguments too

let person4 = {
    firstName: "Surendra",
    lastName: "Jatav"
}

// person2.getFullName() - this will give error because we don't have getFullName() method inside person2 object -
// so we need to call the method of person1 object inside person2 object - or we can reuse getFullName method for person2 object using call method 

person1.getFullName.apply(person4, ['Indore', 'Madhya Pradesh'])   
//value of this inside person1 will be override by person2 object
// we can pass some arguments too
// *the only difference is it takes an array of parameters


// 3. bind() method - this method works similar as call() but it makes a copy of method which can be invoked later

let student1 = {
    firstName: "Surendra",
    lastName: "Jatav",
    getFullName: function(city, state){
        console.log(this)
        console.log(`Hi I am ${this.firstName} ${this.lastName} and I am from ${city}, ${state}!`)
    }
}

let student2 = {
    firstName: "Sandhya",
    lastName: "Dwivedi"
}

const getFullNameCopy = student1.getFullName.bind(student2)
console.log(getFullNameCopy)    // we got copy of the method inside this variable

// getFullNameCopy()    // without parameter
getFullNameCopy('Sausar', 'Chhindwara')


//*=============================================================================


//Production code to bind method with different objects which can be reusable- 

// const printFullName = (param1, param2) => {  // arrow function not bind with object
//     // console.log(arguments)   // not defined in arrow function 
//     console.log(this)
//     console.log(`Hi I am ${this.firstName} ${this.lastName} and I am from ${this.city}, ${this.state}!`)
// }

const printFullName = function (param1, param2) {   //it's all about function keyword
    console.log(arguments)
    console.log(this)
    console.log(`Hi I am ${this.firstName} ${this.lastName} and I am from ${this.city}, ${this.state}!`)
}


let record1 = {
    firstName: "Surendra",
    lastName: "Jatav",
    city: "Indore",
    state: "Madhya Pradesh"
}

let record2 = {
    firstName: "Jitendra",
    lastName: "Jatav",
    city: "shivpuri",
    state: "Madhya Pradesh"
}

let record3 = {
    firstName: "Anita",
    lastName: "Jatav",
    city: "Guna",
    state: "Madhya Pradesh"
}

// let's bind these object with this method

const printFullNameCopy1 = printFullName.bind(record1)
const printFullNameCopy2 = printFullName.bind(record2)
const printFullNameCopy3 = printFullName.bind(record3)

console.log(printFullNameCopy1)    // we got copy of the method inside this variable
console.log(printFullNameCopy2)    // we got copy of the method inside this variable
console.log(printFullNameCopy3)    // we got copy of the method inside this variable

// these methods can be called later

printFullNameCopy1('Paraemeter1', 'Paraemeter2')
printFullNameCopy2('Paraemeter1', 'Paraemeter2')
printFullNameCopy3('Paraemeter1', 'Paraemeter2')

// we can call them directly - 

printFullName.bind(record1)('Paraemeter1', 'Paraemeter2')
printFullName.bind(record2)('Paraemeter1', 'Paraemeter2')
printFullName.bind(record3)('Paraemeter1', 'Paraemeter2')


//using copy for arrow function - but for arrow function we can't bind with objects 

// printFullName.call(record1, 'Parameter1', 'Parameter2')
// printFullName.call(record2, 'Parameter1', 'Parameter2')
// printFullName.call(record3, 'Parameter1', 'Parameter2')


//*Completed.