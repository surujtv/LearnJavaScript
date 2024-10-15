/*
    JavaScript code Execution behind the scene - 
    Phase 1 (Memory Creation Phase) | Hoisting in JavaScript
    JavaScript interpreter scan all the declaration and bring them at the top of their respective scope.

    Phase 2 (Code Execution Phase)
    Now , it will execute each line one by one in a synchronous manner i.e., one after another.

    NOTE: Jab bhi hum koi function call karte h sabse pehle vo call-stack mai jata hai aur uska khud ka ek Execution-Context (Local Scope) create hota hai and Function ke andar ka pura code Execute hone ke bad uska Execution-Context ya Local scope Call-Stack se delete ho jata hai and us function ke andar jitne bhi variables humne declare kiye the sab memory se delete ho jate hai.  
*/ 

// Declaration

let userName = 'Sandhya Dwivedi'
const userAge = 25
function sayHi(){
    arguments
    console.log('Hello, ', userName);
    const a = 12
    const b = 14
    add(a,b)
}
sayHi('sandhya Dwivedi')

function add(){
    x = 7
    y = 9
}

console.log('Program Ended')