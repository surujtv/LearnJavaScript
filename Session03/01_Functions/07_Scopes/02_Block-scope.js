/*
    Block-scope
    The block scope of a variable means that the variable is accessible within the block that is between the curly braces.
*/

{
    const myName = 'const keyword'
    console.log(myName) // accessible hai
}

{
    let myName = 'let keyword'
    console.log(myName) // accessible hai
}

{
    var myName = 'var keyword'
}

console.log(myName);   

// NOTE: let and const are block scoped where var is function-scoped or global-scoped.