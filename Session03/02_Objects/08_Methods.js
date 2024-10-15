/*  
    THEORY --->
    Method In JS Object -->
    Functions inside Objects are called Methods or Actions.

    Syntax -->
    let obj_name = {
        property1: value,  // Key - Value pair
        methodName() {   
            // function definition   
        }
    }
*/

//  PRACTICAL --->


// way - 1 assigning function to object 
let name = {
    firstName: 'Surendra',
    lastName: 'Jatav',
    fullName: function (){
        console.log(`Hi My full Name is ${this.firstName} ${this.lastName}`)
        // NOTE: to access property of current object we use this keyword.
    }
}
// NOTE: this keyword is target the current object. and if we want to use object keys in any method which is defined in same object we have to use this keyword to use key of current object.

console.log(name);
name.fullName();

//-----------------------------------------
// way - 2 assigning function to object

name.greet = function (){
    console.log('Hello !');
}
console.log(name);

//-----------------------------------------
// way - 3 assigning function to object

function add(num1, num2){
    return num1 + num2;
}
name.addition = add;
console.log(name);

//-----------------------------------------
// way - 4 assigning function to object--> ES6 version.

let details = {
    firstName: 'Surendra',
    lastName: 'Jatav',
    skills (...skills){
        return this.skillsList = skills;
    }
}

console.log(name);
console.log(details.skills("HTML","CSS", "JavaScript"));

//-----------------------------------------

