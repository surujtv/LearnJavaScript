// types of operators in js-->
// arithmetic operator --> +,-,*,/,%, **(exponential or power)
// assignment operator --> =
// comparison operator --> ==, !=, > ,<, >=, <=,===(compare value and data types)
// logical operator --> && (and), ||(or)
// bitwise operators-->
// NOT operator--> to flip the value
// Shift operators-->
// << is left shift and >> is right shift.

// add string to integer

// concatenation using '+' operator
console.log("Hello " + "World");

let x = 10;
+console.log("6" + x);
// if we add any int to any number it will conver int to string by default

//but when we use substraction it wil perform unlike addition
console.log("6" - x); //output -4

console.log("6" - -x); // output 16

console.log("6" + +x); // output 610

console.log("6" - +x); // output -4

console.log("6" + -x); // output 6-10
// first sign has higher preference where second is define number is negative or positive

// console.log("6" + / x); not working

// combined (compound) operators -
/*
    Addition assignment operator  (+=): a += b is equivalent to a = a + b.
    Subtraction assignment operator (-=):  c -= d is equivalent to c = c – d.
    Multiplication assignment operator (*=): e *= f is equivalent to e = e * f.
    Division assignment operator (/=): g /= h is equivalent to g = g / h.
    Modulus assignment operator (%=): i %= j is equivalent to i = i % j.
    Exponentiation assignment operator  (**=): k **= l is equivalent to k = k**l.
*/
