/*  THEORY PART --
    Function with return type without argument--->
    
    Syntax-->
    step - 1 create function -
    function fun_name (){
        return 'any msg or code';
    }
    step - 2 invoke function and store returned value.
    let var_name = fun_name()   
    - here returned value will be stored in var_name then we can reuse as a global value.

    ---------------------
    NOTE: 
    -if function returns any value or msg we need to store that value in a variable.
    -value will be returned where function has been called | invoked
    -return Keyword must be used at the end of the code because return keyword working as a break keyword 
    -Code which is written after return keyword won't Execute.

    Why we return values-->
    -we return values to reuse that values somewhere else in our program.
*/

//------------------------------------------------------------------------------------------
// PRACTICAL PART -->
// Example ---> 1 

function greet(){
    return 'Hi ! my name is Sandhya Dwivedi';
    // this function is returning a string.
}
let msg = greet();  // returned string stored in msg variable.
console.log(msg);   // reuse of that returned value we can display this or use it somewhere else.


//--------------------------------------------
// Example ---> 2
function randomVal(){
    return Math.random()
    // this function returns every time random values between 0 and 1.
} 

let value = randomVal();  // returned value stored in value variable.
console.log(value);   // reuse of that returned value we can display this or use it somewhere else.

