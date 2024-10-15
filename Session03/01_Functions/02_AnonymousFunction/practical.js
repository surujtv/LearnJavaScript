/*  
    THEORY PART -->
    Anonymous Function --> No need function name
    Syntax-->
        let var_name = function (){
            //code here
        }      

    NOTE: 
    this is also known as Function Expression.
    this function also have 4 type on the basis of return type and arguments.

    USE-->
    these functions are used as a callback functions to asynchronous programing in JS.
    these functions are also used as method of any object.
*/

//---------------------------------------------------------------
// PRACTICAL PART --

// type - 1 without return type without argument.
let greet = function (){
    console.log("Hello World! I am Sandhya Dwivedi");
}
greet();

//------------------------------
// type - 2 with return type without argument.
let greet2 = function (){
    let date = new Date()
    return `Hi! Today Date is ${date.getDate()}`    // returns current Date
}
let returned_Value = greet2();
console.log(returned_Value);    // Output current date.

//-----------------------------
// type - 3 without return type with argument.
let getAge = function(birthdate){
    const birthDate = new Date(birthdate);
    const differenceInMS = Date.now() - birthDate.getTime();
    const ageDate = new Date(differenceInMS);
    const currentAge =  Math.abs(ageDate.getUTCFullYear() - 1970);
    console.log(`My Current Age is - ${currentAge} years`)
}
getAge('1999-07-23')    // Enter your DOB (yyyy-mm-dd) to get current age
 
//-----------------------------
// type - 4 with return type with argument.
const avg = function(a, b){   // it takes two numbers as an
    let sum  = (a + b) / 2;
    return sum;
}
let result = avg(10,20);
console.log(`Average of given numbers is : ${result}`);