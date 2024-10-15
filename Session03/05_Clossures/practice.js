/*
    Definition - 
    Closures are a powerful and fundamental concept in JavaScript. They allow inner functions to access variables from their outer scope, even after the outer function has completed execution. In simpler terms, a closure “closes over” its lexical scope, preserving the variables and scope of the outer function.

    another definition -
    A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). When you create a closure, you gain access to an outer function’s scope from an inner function.
*/

function hiSandhya(){
 
    const name = 'Sandhya'

    return function msg(){
        const age = 25
        console.log(`My Name is ${name}`)
    
        return function msg1(){
            console.log(`my age is ${age}`)
        }
    }
}

const msg = hiSandhya();
const msg1 = msg()
msg1()