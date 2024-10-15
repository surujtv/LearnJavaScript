/*
    THEORY -
    HOF stand for Higher Order Functions
    Functions That accepts another functions as an arguments called Higher Order Functions.

    Syntax - 
    function fun_name(another_function){
        //code here
    }
*/

// PRACTICAL --

// Example - 1 

function fun_1(sandhya){
    console.log("I am a higher order function") 
}

let fun_2 = () => {
    console.log("you are eligible for vote");
}

fun_1(fun_2)

// Example - 2 HOM -(Higher Order Method)

let arr = [1,2,3,4,5,6,7,8,9]   // Print all even elements
arr.forEach((elements)=>{
    if(elements%2 != 0){
        console.log(elements)
    }
})
