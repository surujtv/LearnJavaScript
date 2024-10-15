// How it's work with function scope - 
// *NOTE: in function scope this behavior depends on strict or non-strict mode in js 

"use strict"    // to enable strict mode 
 
function thisKeyword() {
    console.log(this)   
    //1. if we use strict mode this will be undefined
    //2. if we use non-strict mode this will refers to window object.
}

thisKeyword() // it also depend on that how we call that function in this case this will undefined
window.thisKeyword()    // this refers to window object strict or non-strict doesn't matter.


//*NOTE: if the actual value of this keyword is undefined or null this keyword will be replaced with global object only in non-strict mode.

//* "use strict" :  JavaScript's strict mode was introduced in ECMAScript 5. It enforces stricter parsing and error handling on the code at runtime. It also helps you write cleaner code and catch errors and bugs that might otherwise go unnoticed.