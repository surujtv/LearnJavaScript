/*
    Definition - 
    A rest operator is a type of parameter that gets all of the remaining parameters of a function call via an Array. 

    How to use Rest operator ---> 
    Syntax --
    function fun_name(...argument_name){
        // Code here
    }

    NOTE:
    Rest Operator takes all arguments and create an Array of given arguments.
*/

//----------------------------------------
// Example - 1 Using Normal Function--
function myDetails(name, age, ...skills){   // here skill parameter working as an rest operator
    console.log(`Hi ! My name is ${name}`)  // output-Sandhya Dwivedi
    console.log(`My age is ${age}`)    // output - 24.5
    console.log(`My Skills are ${skills}`) // Output- ['C', 'C++', 'HTML', 'CSS', 'JS-Running']
}
myDetails('Sandhya Dwivedi', 24.5, 'C', 'C++', 'HTML', 'CSS', 'JS-Running')
/*  
    NOTE: 
    the name passed to first argument.
    the age passed to 2nd argument.
    and Rest parameters passed to 3rd arguments which is ...skills Operator 
*/

//--------------------------------------------
// Example - 2 pass dynamic numbers to a function and return sum of all numbers using rest operator--->

let getSum = (...rest) => { // ...rest will create an Array of multiple input values
    console.log(`Passed arguments - ${rest}`)
    console.log(`Lentgh of Array is - ${rest.length}`)
    let sum = 0;
    for (const elements of rest) {
        sum += elements;
    }
    return sum;
}

let total = getSum(10,54,68,20,45,78);  // we can pass multiple values
console.log(`Sum of Given numbers - ${total}`)  // output sum of given numbers
