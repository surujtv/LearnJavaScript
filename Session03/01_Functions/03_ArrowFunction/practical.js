/*  
    THEORY PART -->
    Arrow functions were introduced in the ES6 version. They make our code more structured and readable. Arrow functions are anonymous functions i.e. functions without a name and without function keyword but they are often assigned to any variable.

    NOTE:
    this is also known as Function Expression.
    this function also have 4 type on the basis of return type and arguments.

    USE-->
    these functions are used as a callback functions to asynchronous programming in JS.
    these functions are also used as a method of any object.

    Arrow Function --> No need fun_name and function keyword
    Syntax-->
        let var_name = () => {
            //code here
        }
*/

//---------------------------------------------------------------
// PRACTICAL PART --

// type - 1 without return type without argument.
let greet = () => {
    console.log("Hello World! I am Sandhya Dwivedi");
}
greet();

//------------------------------
// type - 2 with return type without argument.
let greet2 = () => {
    let date = new Date()
    return `Hi! Today Date is ${date.getDate()}`    // returns current Date
}
let returned_Value = greet2();
console.log(returned_Value);    // Output current date.


//-----------------------------
// type - 3 without return type with argument.
let findGreatestNum = (num1, num2) => {
    // find greatest using ternary Operator.
    num1 == num2 ? console.log('Both are equal') : num1 > num2 ? console.log(`Num - ${num1} is Greatest`) : console.log(`Num - ${num2} is Greatest`);
}
findGreatestNum(56,89)    // Enter any 2 numbers.
//-----------------------------


// type - 4 with return type with argument.
const avg = (a, b) => {   // it takes two numbers as an
    let sum  = (a + b) / 2;
    return sum;
}
let result = avg(10,20);
console.log(`Average of given numbers is : ${result}`);