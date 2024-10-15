/*
    THEORY --
    argument  Keyword is returned an Array Object same as rest parameter -->
    
    SYNTAX - 
    function fun_name(){
        arguments
        // any code here
    }

    NOTE: it will work with only Normal Function Not with Anonymous or Arrow Function
*/

//-------------------------------------------
// PRACTICAL --

// Example - 1 Access Values of arguments operator--
function getValue (){
    arguments
    if(arguments.length==0){
        console.log(`No parameter's passed`)
    }else{
        console.log(`${arguments[0]} ${arguments[1]} -- ${arguments[2]}`)   // Access elements by index value
    }   
}
getValue('Sandhya', 'Dwivedi', 'Sandhu')
getValue()  // if No parameter's passed


//----------------------------------------------------
console.log('\n')

// Example - 2  Sort given Numbers in Acceding Order

function sortGivenNumbers(){
    arguments   // arguments keyword holds all passed arguments as an array Object
    console.log(`Given Array is - ${arguments}`)
    console.log(`length of Given/Array is - ${arguments.length}`)

    if (arguments.length == 0){
        console.log(`No parameter's passed`)
    }else{
        for(let index = 0; index < arguments.length ; index++){
            for(let index1 = index+1; index1< arguments.length; index1++){
                if(arguments[index] < arguments[index1]){   // flip the '>' sign to deccending order
                    let temp = arguments[index];
                    arguments[index]=arguments[index1]
                    arguments[index1] =temp;
                }
            }
        }
        console.log("Sorted Numbers are : ", arguments) 
    }
}
sortGivenNumbers(4,7,1,5,78,45,52,89) 
 