/*  THEORY PART --
    Function without return type with argument--->
    
    Syntax-->
    step - 1 create function
    function fun_name (arg1, arg2){
       console.log(arg1, arg2)
    }
    step - 2 invoke function to execute inside code
    func_name();

    NOTE: multiple argument can be passed according to our requirement.
*/
//----------------------------------------------------------------------------

// PRACTICAL PART --
// Example - 1 get full name.

function fullName(firstName, lastName){
    console.log(`Hi my name is ${firstName} ${lastName}.`);
}

// function calling - 
fullName('Sandhya', 'Dwivedi'); //Output--> Hi my name is Sandhya Dwivedi.

//-------------------------------------------------------------------------------

// Example - 2 get sum of two numbers-->
 
function sum(num1, num2){
    let result = num1 + num2;
    console.log(result);
}

// function calling
sum(20,25); //output sum of given numbers. - 45

