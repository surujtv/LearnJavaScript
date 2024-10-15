// We can differentiate var, let and const keywords as follows-->

/*
Short Overview---->
1. Scope-> var doesn't have block scope it is globally scoped where 'let' and 'const' have block scope
2. Re_Declare-> var can be redeclare where let and const can't be redeclare.
3. Re_Initialization-> var and let can be redeclare unlike const.
4. for const variables we have to initialize it at the time of declaration unlike var and let.
*/

//-------------------------- Practical Overview ----------------------------------------

// -------------------------------------------------------------
// 1. on the basis of "SCOPE"-->
// var doesn't have block scope it is globally scoped where 'let' and 'const' have block scope
// for example---->

{
    var fullName = 'Sandhya Dwivedi';
    let DOB = '23/07/1999';
    const age = 24.5;
}
// if we want to access these values outside the block output will be-->
// console.log(fullName)   // Sandhya Dwivedi globaly scoped
// console.log(DOB)    //  DOB is not defined due to block scope
// console.log(age)    //  age is not defined due to block scope
// *uncomment all consol.logs to see output

// -------------------------------------------------------------

// 2. on the basis of "REDECLARATION"-->
// var can be redeclare where let and const can't be redeclare.
// for Example var can be redeclare-->
var fullName = 'Sandhya Dwivedi';
var fullName = 'Sandhya Dwivedi';  
console.log(fullName);  // last output--> Sandhya Dwivedi
/* 
let DOB = '23/07/1999'
let DOB = '23/07/1999'  
const age = 24.5;
const age = 24.5;
*/
// We can't do this because let and const can't be redeclare it will throw an error 
// *uncomment krke dekh sakte ho

// -------------------------------------------------------------

// 3. on the basis of "RE_INITIALIZATION"-->
// var and let can be re-initialized unlike const--

var fullName = 'Sandhya Dwivedi';
fullName = 'sandhya.dwivedi.5454';
console.log(fullName)   // output--> sandhya.dwivedi.5454

let DOB = '23/07/1999';
DOB = '23/07/2001';
console.log(DOB)    // output--> 23/07/2001

const age = 24.5;
age = 24.6;
console.log(age) // output --> throw an error - can't reassign values to const variables

// -------------------------------------------------------------

// 4. on the basis of "INITIALIZATION while Declaring variables"-->
// for const variables we have to initialize it at the time of declaration unlike var and let
// for Example-->

// const myName;   //  we can't do this it will throw an error
const myName = 'Surendra Jatav'

let name;
var name1;

