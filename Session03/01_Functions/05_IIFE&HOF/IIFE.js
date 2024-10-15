/*
    IIFE - 
    Immediately Invoked Function Expression (IIFE) is a JavaScript pattern that allows you to
    create a local scope for variables and functions. It can be used to avoid polluting the global
    namespace by creating an isolated environment where your code runs, without needing to declare
    all of its variables in the global context.

    Syntax - 
    (function(arg1, arg2, ...argN){
        // code here
    })();

    NOTE: 
    Function Called by default at a time when we run our code 
*/

// Example - 1

var myVariable = "I am a variable inside the IIFE";
console.log("Before calling the function");
console.log(myVariable);
(function() {
    var myPrivateVariable = "I am a private variable inside the IIFE";
    console.log("\nAfter calling the function");
    console.log(myPrivateVariable);
})();
