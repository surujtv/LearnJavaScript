// Function declarations get hoisted to the top of their containing scope, so they are available from the start of that scope onwards.

// call function before declaring it but it will work.
msg()
msg1()  //referenceError: Cannot access 'msg1' before initialization

function msg(){
    console.log('Hello this is normal function represents how hoisting works in javascript!');
}

// we can't do this with function expressions - 
var msg1 = () => {console.log("This is arrow function")};
