/*
    Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
*/

//without default parameter
function add(number1, number2) {
    return number1 + number2;
}

const result = add()    // undefined+undefined=NaN

// With Default Parameter Value

// Way - 1
function add1(number1, number2) {
    if (number2 === undefined) { 
        number2 = 0
    }
    return number1 + number2;
}

const defaultResult = add1(1)   //   1+0=1
const customResult = add1(1, 3) //   1+3=4

// Way - 1

function add2 (x, y = 10) {
    return x + y
}

console.log(add2(5))        // 5+10=15
console.log(add2(7, 6))     // 7+6=13