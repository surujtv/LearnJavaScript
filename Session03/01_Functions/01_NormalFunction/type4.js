/*  THEORY PART--
    Function with return type with argument--->
    
    Syntax-->
    step - 1 create function -
    function fun_name (arg1,arg2,arg3){
        //code here
        return final_Value;
    }
    step - 2 invoke function and store returned value.
    let var_name = fun_name(arg1, arg2, arg3)   
    - here value will be stored in var_name then we can reuse as a global value.

    ---------------------
    NOTE: 
    if function returns any value or msg we need to store that value in a variable.
    value will be returned where function has been called | invoked

    Why we return values-->
    we return values to reuse that values somewhere else in out program.
*/

//------------------------------------------------------------------------------------------------
// PRACTICAL PART ---
// Example --> 1

// QUE - take marks of 5 subject as an argument and return total marks and reuse returned value in another function to get percentage-->

// step - 1 create function with 5 arguments for 5 subjects marks->
function totalMarks(Hindi, Eng, Phy, Chem, Math){
    // write code to calculate total marks-
    let grandTotal = Hindi + Eng + Phy + Chem + Math; 
    return grandTotal;  // return finalValue 
}

// step - 2 invoke function with marks and store finalValue-->
let kuchhbhi = totalMarks(60,80,78,67,89);  // total Marks will be stored in grandTotal
console.log(`Total Marks : ${kuchhbhi}`);    // Display total Marks

// step - 3 create another function to get percentage-->
function getPercentage(grandTotal){
    let percentage = grandTotal / 5; // write logic to get percentage
    return percentage; 
}

// step - 4 invoke getPercentage function and pass grandTotal as an argument in it
let grade = getPercentage(grandTotal);
console.log(`Percentage : ${grade}%`)


/*
    NOTE: 
    that's how we can reuse returned values. 
    return Keyword must be used at the end of the code because return keyword working as a break keyword 
    Code which is written after return keyword won't Execute.
*/