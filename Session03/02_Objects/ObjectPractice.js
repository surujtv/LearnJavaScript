/* 
    Object hota kya hai - 
    Objects are non-primitive data structure in JS which is used to store bulk amount of heterogenous data in the form of key: 'Value' Pairs.
    SYNTAX - 
    var object_name = {
        key1 : "value1" //value string hai to single qoute ya double qoute m likhna hai
        key2 : value2,  
        .... : ....
        last_key : last value 
    }

    NOTE: 
    1. key is always string type and immutable.
    2. Value can be any type of data like number, string, array, function etc. and these are mutable that means we can update values in objects.
    3. if value is a string then it is compulsory to use single qoute otherwise use double quote for the value.
*/


// PRACTICAL - 
//1. Declaration - 
let  person = {};   // Empty object declaration
let empty_obj = new Object()   // we can create epmty object by this  way also but it's not recommended as per javascript guidelines.

let fatherName = 'JohnKepapa'
let student = {
    name : 'John',
    age : 25,
    rollNo : 101,
    isPassed : true,
    'fees' : null,
    "class" : undefined,
    "school name" : 'ABC School',
    JohnKepapa : 'father'
}
console.log('Original Object : ',student);

//===========================================


// CRUD -

// 1. add new property - SYNTAX - objectName.NewPropertyName = assignValue; 

student.address = 'indore MP'
console.log('Updated Object : ',student);

// 2. update property - SYNTAX - objectName.propertyName = newValue;

student.age = 26;
console.log('Updated Object after updating the age : ',student);

// 3. delete property -    SYNTAX - delete objectName.propertyName

delete student.class    // delete keyword returns boolean value true or false.
console.log('After Deleted Property : ', student)


//==========================================


// Access - 

//  1. Dot Notation - we can access any property of an object using dot notation (.)

// getting student name using dot notation SYNTAX objectName.propertyName

console.log('studentName : '+student.name)
console.log('studentAge : '+student.age)

//  1. Bracket Notation - we can access any property of an object using Bracket notation - 
//  SYNTAX - ObjetName['propertyName']  
// NOTE : we are using single or double quote  around the key name because key type is always string.


console.log('studentName : '+student['name'])
console.log('studentAge : '+student['age'])
console.log(student.fatherName)    // Output - father
// console.log('studentName : '+student[name]) // output - not defined

//==========================================


// in Operator -  in operator search property inside a object if it exists or not.
// SYNTAX - "PropertyName" in ObjectName

// console.log(name in student)    // not defined
console.log("name" in student)    // output - true
console.log("surname" in student)    // output - false

//=========================================


// How to check data type of any value key or variable- typeof

//values ka data type-
console.log(typeof student)     // Output - object
console.log(typeof student.name)    // Output - string
console.log(typeof student.age) // output  - number

// keys ka data type-
console.log(typeof Object.keys(student)[0]) // Output - string
console.log(typeof Object.keys(student)[1]) // Output - string

//=========================================

// How get all keys, values and key value pairs - 

let keysArray = Object.keys(student);      // returns array of Keys
console.log(keysArray)

let valArray = Object.values(student);     //returns an Array of Values
console.log(valArray)

let keyValuePair=Object.entries(student);   //Returns an Array of [[key ,value], [key1 ,value1]] pair
console.log(keyValuePair)

//===========================================

// get all keys and values using for-in loop 
// NOTE: we can't use dot notation in loops

for (const varName in student) {
    // console.log('Keys : ' + varName)
    // console.log('Values : ' + student[varName])
    console.log(`${varName} : ${student[varName]}`);
}

//==========================================

// Method - function inside any object are called methods -
let obj = {
    name : 'Surendra',
    method1 : function () {
        console.log('Hello World - Normal function');
    },
    method2 : ()=> {
        console.log('Hello World - Arrow function');
    },
}
console.log(obj)

obj.add = function(a,b){
    return a+b;
}

console.log(obj)

console.log(obj.method1())
console.log(obj.method2())
console.log(obj.add(2,5))

//===========================================

// this - targets current object -
let person1 = {
    firstName : 'Sandhya',
    lastName : 'Dwivedi',
    showFullName : function(){
        console.log(`Hi My Name is ${this.firstName} ${this.lastName} and ${person2.firstName} ${person2.lastName} is my friend`)
    }    
}

let person2 = {
    firstName: 'Surendra',
    lastName: 'Jatav'
}

person1.showFullName()

let name = 'Surendra'
function msg() {
    console.log(`Hi My Name is ${this.name}`)   //  it will give error because there is no property "name" in global scope so it will take window object.
}
msg()

//===========================================

// new keyword - new keyword reserve memory for object.
const emptyObj = new Object(); // {}
console.log(emptyObj)

// NOTE: now we can add properties into that empty object - 

//===========================================

// NOTE: getters and setters are function which will be called when you try to access or modify the property of an object respectively. but we don't need to call these functions.

let object = {
    pan : 'bykpj6724m',
    mobile : '', 
    get getPanUpperCase(){  // getting PAN in upper case.
        return this.pan.toLocaleUpperCase();
    },
    set setPanUpperCase(parameter){ // setting PAN in upper case
        this.pan = parameter.toLocaleUpperCase()
    },
    set setMobileNumber(number){   // setting mobile number in number type
        this.mobile = Number(number)
    }
}

console.log(object.getPanUpperCase)
console.log(object)

object.setPanUpperCase = 'abcd1245c'
console.log(object.pan) // output - ABCD1245C
console.log(object)

// object.mobile = '9993945380'
object.setMobileNumber = '9993945380'
console.log(typeof object.mobile)
console.log(object)

//===========================================

// Object Constructor Function - 
// This is a special type of function that is used to create an object and it has name as well and behaves like normal functions but with extra functionality. We can set dynamic key and values inside an object which is created by this Function.

// Problem in creating multiple objects- +
// let student1 = {
//     name: 'surendra',
//     rollNo: 101
// }

// let student2 = {
//     name: 'sandhya',
//     rollNo: 102
// }

// let student3 = {
//     name: 'jitendra',
//     rollNo: 103
// }

// let student4 = {
//     name: 'videh',
//     rollNo: 104 
// }

function Person (name, rollno, standard, fees, schoolName){
    this.name = name
    this.rollNo = rollno
    this.standard = standard
    this.fees = fees
    // console.log(name, rollno, standard)
}

const std = new Person()
console.log(std)
const std1 = new Person('Surendra', 101, 'Msc')
console.log(std1)
const std2 = new Person('Sandhya', 102, 'Msc')
const std3 = new Person('Videh', 103, 'Msc')
const std4 = new Person('Unknown', 101, 'Msc')
const std5 = new Person('Pata nahi', 101, 'Msc')
const std6 = new Person('Kuchh bhi', 101, 'Msc')
console.log(std2, std3, std4, std5, std6)

//===========================================

// Destructuring - Destructuring is a convenient way to extract values from arrays and objects and assign them to variables. It makes your code cleaner and more concise.

// Array Destructuring - 
// Array Definition - Array is a Non-Primitive data type in javaScript which is used to store bulk amount of heterogenous(any type of data) data in contagious memory location. each element present in the array have its own numeric value that is called index value which starts from 0. 

// const arr = ['Surendra', 25, 'C C++', null, undefined] // declaration

// const [Name, age, skills, nullVar, undefinedVar] = arr // Destructing
const [Name, age, skills, nullVar, undefinedVar] = ['Surendra', 420, 'C C++', null, undefined] // Destructing

console.log(Name)
console.log(age)
console.log(skills)
console.log(nullVar)
console.log(undefinedVar)

// Object - Destructuring

const {stdAge, stdName } = {stdName: 'surendra', stdAge: 25}
console.log(stdName)
console.log(stdAge)

//===========================================

// Predefined method to freeze any object - Object.freeze(object-name)
//if we don't want to delete, add or modify any property in Object then use this method. This method is used to prevent object by delete, add or modify any property.
// NOTE : isse bas object ko freeze kar sakte hai.


let sandhya = {
    name: 'Sandhya Dwivedi',
    age: 25
}
Object.freeze(sandhya)
delete sandhya.age // it will return true false
sandhya.name = 'Sandhya jii'
sandhya.qualification = 'Msc'

console.log(sandhya)

//Seal Object- Object.seal(object_name) 
//if we don't want to delete or add any property in Object then use this method. This method is used to prevent object by delete or add any property. but we can modify existing properties.

let surendra = {
    name: 'Surendra Jatav',
    age: 23
}

Object.seal(surendra)

surendra.isGraduate = false
delete  surendra.age
surendra.name = 'Surendra'
console.log(surendra)

// How to freeze specific property in any Object - 
// SYNTAX - Object.defineProperty(object_name, 'property', {configurable:false, writable: false})
let school = {
    name:'DAV Public School',
    address:'Delhi',
    schoolId : '124563' 
}

Object.defineProperty(school, 'schoolId', {configurable:false, writable: false})
school.schoolId = 'ABCD'
delete school.schoolId

console.log(school)

// Object.defineProperties()




/*
    1. How to Declare Objects
    2. How to Access Objects values
    3. How to Add new property to any Object
    4. How to update property existing properties (nesting)
    5. How to  delete any property from an Object
    6. what is the use of in Operator in Objects - 
    7. predefined methods-
        Object.keys(Object_name)
        Object.values(Object_name)
        Object.entries(Object_name).
    8. Accessing values using forin loop
    9. How can we Create our own methods.
    10. predefined objects(Math, Date, global(window Object))
    11. this and new keyword
    12. getters and setters.
    13. how to create constructors Function in JavaScript?
    14. Destructuring 
    15. How to freeze and seal objects
    16. 
*/