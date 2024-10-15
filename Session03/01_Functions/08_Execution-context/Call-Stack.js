/*
    JavaScript Call-stack
    JavaScript Call-stack is a data structure or a mechanism that stores the call history of functions in an application. It keeps track of all function calls.
    JavaScript uses a Call Stack to track the functions in a program. The call stack works on the Last In, First Out (LIFO) principle. This means that the most recently called function will be the first to be completed. Whenever a function is called, a new frame is added to the top of the stack.

    stack-overflow 
    jab call-stack me uski limit se jyada function store hote hai use stack over flow kehte hai.
    Error - RangeError: Maximum call stack size exceeded
*/

sayHi()

let userName = 'Sandhya Dwivedi'
const userAge = 25

function sayHi(){
    const userName = 'Sandhya Dwivedi'
    console.log('Hello, ', userName);
    const a = 12
    const b = 14
    add(a,b)
    console.log('function ended')
}

function add(x, y){
    return x+y;
    kuchhbhi()
}

console.log('Program Ended')

function recursion() {
    console.log('Hello world !')
    recursion()
}

recursion() // RangeError: Maximum call stack size exceeded 
// Infinite loop will be created if we don't stop the execution of this recursive function and after some time it will return a Error called call-stack limit exceeded.


