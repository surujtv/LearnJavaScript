//  step -1 function Kya hote hai-
/*
    Definiton  - block of code hota h jo ki logic saperate karne k kam aata hai.
    
    Advantages - 
    code reusability 
    code readability badhata hai
    global memory ko pullute nahi karta.

    Category - 2
    1. Function Declaration
    2. Function Expression

    type - 3
    1. Normal Function- (Function Declaration) 
    2. Anonymous Function (Function Expression)
    3. Arrow Function (Function Expression)

    NOTE: JavaScript ke sare reusable logic functions ke andar likh diye jate hai.

*/


// step - 2 kya kya karta hai -

//=======================================================================

// PRACTICAL - 

// type - 1 Normal Function- (Function Declaration) 
// function function_name(){
//     console.log('Hi I am a Normal Function or function declaration')
// }

// function_name()

// // type - 2 Anonymous Function (Function Expression)

// let anonymous_function = function (){
//     console.log('Hi I am a Anonymous Function or function Expression')
// }

// anonymous_function()

// // type - 3 Arrow Function (Function Expression)

// let arrow_function = () => {
//     console.log('Hi I am a Arrow Function or function Expression')
// }

// arrow_function()

//=======================================================================

// const greet = (parameter) => {
//     console.log(`Hello ${parameter} ! Welcome to our website`)
// }
// greet('surendra')
// greet('Sandhya')
// greet('diksha')
// greet('Rupali')
// greet('Jitendra')
// NOTE: Parameters fucntion ko dynamic bana dete hai.

//=======================================================================

// Non - premetive data types as an arguments - 

// const array = (arr) =>{
//     for(let i = 0; i < arr.length; i++){
//         console.log(`Element at index ${i}: ${arr[i]}`)
//     }
// }
// array([1,2,3,4,5,4,6])

// const object = (obj) =>{
//     console.log(obj)    // output - { name: 'Sandhya', age: 25 }
//     console.log(obj.name)   // output  - Sandhya
//     console.log(obj.age)   // output  - 25
// }
// object({
//     name: 'Sandhya',
//     age: 25
// })


//=========================================================================

// variables as an argument -

// const x = 4, y = 3, z = 4
// const add = (a, b, c) => {
//     console.log(a + b + c)
// }

// add (x,y,z)


//=========================================================================



// How to set default parameters
// ES-5
// const add1 = (a, b, c) => {
//     if(a === undefined){
//         a = 1;
//     }else if(b === undefined){
//         b = 2;
//     }else if(c === undefined){
//         c = 10;
//     }

//     console.log(`a= ${a}, b=${b}, c= ${c}`)
//     console.log(a + b + c)
// } 

// // add1(2,3,4)
// add1(2,3)



//ES - 6
// const x = 4, y = 3, z = 4
// const add = (a = 0, b = 2, c = 1) => {
//     console.log(`a= ${a}, b=${b}, c= ${c}`)
//     console.log(a + b + c)
// }

// // NOTE: jab bhi hum kisi undefined value me koi numeric value add karte hai to NaN return hota hai.

// add (x,y,z)
// add (x)
// add()
// console.log(undefined+undefined) //  returns NaN


//=======================================================================

// Rest parameter using Rest operator

// const  sandhya = (a, b, c, ...rest) => {
//     console.log(`a= ${a}, b=${b}, c= ${c}, rest=`, rest);
//     console.log(a + b + c)
// }

// // sandhya(2,4,3)
// sandhya(2,4,3,4,5,6,7)

//=======================================================================

// const object = ({name, age}) =>{
//         console.log(name)   // output  - Sandhya
//         console.log(age)   // output  - 25
//         console.log(`Hello I am ${name} and I am ${age} year's old`)
//     }
//     object({
//         name: 'Sandhya',
//         age: 25
//     })

//=======================================================================


// SCOPES in JavaScript - 

// Global Scope- 
// let x = 10 // ye value abhi global scope m present h
// var sandhya = 'sandhya'
// {
//     // local scope
//     console.log('Local Scope : '+x)
//     var s = 8
//     let y = 15
//     const z = 16
//     console.log('Local Scope : '+y)
//     console.log('Local Scope : '+z)
//     console.log('Local Scope : '+s)
// }
// console.log('Global Scope : '+s)
// console.log('Global Scope : '+x)
// console.log('Global Scope : '+y)    // Error - not accessible
// NOTE: global scope ke sare variables ko hum local scope m access kar sakte hai.
// NOTE: Local scope ke kisi bhi variable ko hum global scope m access nahi kar sakte hai.

//=======================================================================

// function scope - 
// function fun() {
//     // function -scope | local scope (fun)
//     let x = 'let keyword';
//     const y = 'const keyword';
//     var z = 'var keyword';

//     console.log(x)
//     console.log(y)
//     console.log(z)
// }

// fun()
// console.log(x)  //Error - Not Defined
// console.log(y)  //Error - Not Defined
// console.log(z)  //Error - Not Defined    

// NOTE: variables declared with var keyword within any function are not accessible in the global scope.

//lexical Scopes -

// let name = 'Sandhu'
// const fun_1 = () => {
//     console.log('Hi I am a Parent Function')
    
//     // let name = 'Sandhyaji'
    
//     const fun_2 = () => {
//         // let name = 'Sandhya'
//         // let age = 25
//         console.log(`Hi my name is ${name}`)
//         const fun_3 = ()=>{
//             // const name = 'Surendra'
//             console.log(`I am inside innermost function and my name is ${name}`)
//         }
//         fun_3()
//     }
//     fun_2()
//     // console.log(age)
// }
// fun_1()

// const returnArray = (...arr) => {
//     return arr
// }
// const result = returnArray(1,2,3,4,5);
// console.log(`Array : `, result) // output - [1,2,3,4,5]


//=======================================================================

// How JavaScript works - 

//=======================================================================

// Que - 1 : function declaration banana hai jo ki kisi bhi number ka factorial return krke print krvana hai.
// Que - 2 : 5 subject ke marks lena h as an argument unka total nikalna h and uske base percentage nikalna  percentage ke base pr grade decide karna h.


// Que - 1

// function factorial(num){
//     let fact = 1
//     for(let i = num ; i >= 1; i--){
//         fact *= i
//     } 
//     return fact
// }
// const result = factorial(10)
// console.log(result)

// Que - 2
// const total_marks = (Hindi, Eng, Math, Phys, Chem) => {
//     return Hindi+Eng+Math+Phys+Chem
// }

// const marks = total_marks(85, 65, 70, 60, 36)
// console.log(marks)

// const percentage = (total , total_subject) =>{
//     return total/total_subject
// }

// const get_percentage = percentage(marks , 5)
// console.log("Percentage is " + get_percentage + "%")

// const grade = (percentage) =>{
//     if(percentage < 30 ){
//         return `FAIL`
//     }else if(percentage >= 30 && percentage <= 39){
//         return `Grade : Mushkil se Pass Hua Hai !`
//     }else if(percentage >= 40 && percentage <= 49){
//         return `Grade : 3rd`
//     }else if(percentage >= 50 && percentage <= 59){
//         return `Grade : 2nd`
//     }else if(percentage >= 60){
//         return `Grade : 1st`
//     }
// }

// const get_grade = grade(65)
// console.log(get_grade)

// console.log(sayHi)
// sayHi()
// function sayHi (){
//     console.log('Hello World !')
// }