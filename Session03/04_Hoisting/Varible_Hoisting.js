/* 
    NOTE: Hoisting is just a concept to understand what it is So just read this theory only.

    Hoisting in JavaScript is a behavior in which the JavaScript interpreter moves the declaration of functions, variables, and classes to the top of their respective scopes during the compile phase(memory-creation phase). This means that you can use and call functions, variables, and classes before they are declared in the code.

    For example, if you have a function declaration, you can call it before it is declared in the code, and JavaScript will still be able to find and execute it. Similarly, if you declare a variable with the var keyword, you can use it before the declaration, and JavaScript will initialize it with a default value of undefined.

    However, it is important to note that only the declaration is hoisted, not the assignment. This means that if you declare a variable and assign it a value in the same statement, only the declaration will be hoisted, and the assignment will remain in its original position.

    Hoisting can sometimes lead to unexpected behavior, especially when using variables declared with the let and const keywords. These variables are not initialized with a default value of undefined when they are hoisted, so attempting to use them before they are declared will result in a ReferenceError: .

    To avoid potential issues with hoisting, it is generally recommended to declare all functions, variables, and classes at the beginning of their respective scopes. This can help make the code more predictable and easier to understand.

    Temporal Dead Zone -- (Scripting Scope)
    The Temporal Dead Zone is a phase in the execution of JavaScript code when variable declared with let and cost are in a state of “limbo.” During this phase, the variable exists, but you can't access its value. 
    This peculiar state is caused by JavaScript's variable hoisting mechanism.
*/


// x=5
// console.log(x)
// let x   // we declare this at last but we used it before still this will work


// y = 10
// console.log(y)  // still will work even we didn't declare y.


// console.log(18 == 18)   //true
// console.log(18 == 18 == 18)   //false
// console.log(18 == 18 == 18 == 18)   //false  0 false 1