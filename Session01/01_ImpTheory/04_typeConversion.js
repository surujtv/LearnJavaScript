/*
    Type Conversion in JS-->
        Converting  one data type to another is called as Type conversion.
        
    Types of conversion --->
    1. Implicit type conversion: 
        - When we assign a value of one data type to another without explicitly converting it, JavaScript does the conversion for us.
    2. Explicit  type conversion: (Manually)
        using parseInt(), parseFloat() methods, Number() method and String() method we can convert one data type to another.
*/


// type conversions------>
console.log("Hello " + "World");

let x = 10;
console.log("6" + x);
// if we add any string to any number it will convert int to string by default (implicite conversion)

//but when we use substraction it will perform unlike addition(Implicite conversion)
console.log("6" - x);   //output -4

console.log("6" - - x); // output 16

console.log("6" + + x); // output 610

console.log("6" - + x); // output -4

console.log("6" + - x); // output 6-10  // first sign has higher preference where second is define number is negative or positive

// console.log("6" + / x); not working

console.log(x - + "6"); // output -4
console.log(x - "6"); // output 4
// subtraction sign convert string into number by-default
// Addition operator concat strings if we try to add number to a string it will be concanated.

//Some methods (explicit conversion)-------->
//1. String()
//2. Number()
//3. Boolean()

let type = 'Hello'  
console.log(typeof type);

type = Number(type);
console.log(typeof type);
console.log(type);  // Output--->NaN

type = 32
type = String(type);
console.log(typeof type);
console.log(type);

// type = '' empty string will be marked as false
type = 'Surendra'   //Output true
type = Boolean(type)
console.log(type)

// type = 1 // all numbers except 0 will be marked as true
type = 0    // Output false
type = Boolean(type);
console.log(typeof type);
console.log(type);