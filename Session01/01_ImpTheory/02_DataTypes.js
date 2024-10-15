/*
In JavaScript, there are several data types. The primitive data types are:

String: Represents a sequence of characters. It is defined using either single quotes (' ') or double quotes (" ").
let string1 = 'Hello World';
let string2 = "Hello JavaScript";

Number: Represents a numeric value. In JavaScript, there is only one number type, which can contain both integers and floating-point values.
let num1 = 10; // Integer
let num2 = 3.14; // Floating-point number

Boolean: Represents a true or false value. It is commonly used in conditional expressions.
let bool1 = true;
let bool2 = false;

Null: Represents a null value, which can be assigned to a variable. It represents an empty or non-existent value.
let nullValue = null;

Undefined: Represents an undefined value. In JavaScript, this value is automatically assigned to variables that have been declared but not initialized.
let undefinedValue;
console.log(undefinedValue); // Output: undefined

Symbol: Represents a unique identifier or a symbol in JavaScript.
let symbol1 = Symbol('description');

BigInt: Represents an arbitrary large integer, larger than the maximum safe integer limit (2^53 - 1).
let bigInt1 = 12345678901234567890n;

*/

/*
Non-Premetive---->

There is only one premetive data type that is called Object and Object are devided into three categories. 

Object literals: 
Represents a collection of properties and each property is a association between a unique key and a value.
let object1 = 
{ key1: 'value1', key2: 'value2' };

Arrays : 
Represents an ordered collection of items, where each item is a value and can be accessed by an index.
let array1 = [1, 2, 3, 4, 5];

Functions : 
Represents a function or a reusable piece of code that can be defined once and called multiple times.
function add(a, b) {
 return a + b;
}

----------------

NOTE: Date and Promises are also Object literals.
Date: 
Represents a specific moment in time.
let currentDate = new Date();

Promise: 
Represents an object that represents an eventual completion or failure of an asynchronous operation and its resulting value.
let promise1 = new Promise((resolve, reject) => {
 setTimeout(() => {
    resolve('Promise resolved');
 }, 1000);
});

*/