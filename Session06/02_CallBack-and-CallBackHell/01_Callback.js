/*
    CallBack Function - 
    
    Function that is passed as an argument to the another function is called callback function.

    Functions that takes another function as an parameter that is called HOF.

    callbacks functions are too power full by use callbacks we can code asynchronously.
    and we can say that asynchronous javaScript is possible by callbacks.

    In callbacks it is responsibility of HOF to call that callback function.

    Syntax - 

    function parentFun(callback){
        // some work here
        callback()
    }

    function fun_name(){

        // do something with result of previous operation
    
    }

    parentFun(fun_name)

    
*/

// Sync CallBack ===============

function userName(name, functionName){
    console.log(`Hello ${name}`);
    greet()  // can access global function
    functionName()  // callback function
    // console.log(functionName)
}

userName('Surendra', greet)  

var greet = () => { // cannot use before initialization...
    console.log('Welcome in Indore !!')
}

console.log(greet) 
userName('Sandhya',greet)     

// function greet(){
//     console.log('Welcome in Indore !!')
// }


// Async CallBack ============================

// const {randomInt} = require('crypto')

// const timeId1 = setInterval(function otp(){
//     // const otp = randomInt(100000,1000000)

//     console.log('Hello Sandhya !!')
// }, 2000)

// const timeId2 = setInterval(function otp(){
//     // const otp = randomInt(100000,1000000)

//     console.log('Hello Surendra')
// }, 1000)

// const timeId3 = setInterval(function otp(){
//     // const otp = randomInt(100000,1000000)
//     console.log('Good Morning')
// }, 3000)

// console.log(timeId1)

// setTimeout(()=>{
//     clearInterval(timeId1)
//     clearInterval(timeId2)
//     clearInterval(timeId3)
// }, 5000)
