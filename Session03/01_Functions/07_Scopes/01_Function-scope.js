/*
    Function-scope 
    In JavaScript, a function creates a new scope. This means that variables defined inside a function are not accessible from outside the function.
*/
// function_scope();
// console.log(z)   // Error - not defined

function function_scope() {
    let x = 'let keyword';
    const y = 'const keyword';
    var z = 'var keyword';
    console.log(x)
    console.log(y)
    console.log(z)
    function print_z(){
        console.log(x); //accessible
        console.log(y)
        console.log(z)
        //working end
    }
    print_z()
}

function_scope();
// console.log(x)   // Error - not defined
// console.log(y)   // Error - not defined
console.log(z)   // Error - not defined

