/*
    Syntax-->
    let Obj_Name = {
        key1: 'value1',
        key2: value2,
        .....,
        key: value
    }
*/

//-----------------------------------------

// 1. create object to store your details-->

let emptyObject = {}
let myName = 'Surendra'

let myDetails = {
  name: "Sandhya Dwivedi",
  age: 24.5,
  qualification: "M.Sc.",
  address: "Indore MP",
  Surendra: 'friend'
};

console.log(myDetails.myName) // output - undefined
console.log(myDetails[myName]) // output - friend || access variable values
console.log(myDetails['na' + 'me']) // output - Sandhya Dwivedi

// console.log(`${myDetails}`)  // NOTE: we can't display whole object using template literals.
console.log('My Details : ' + myDetails);
console.log('Empty Object : ' + emptyObject)

//----------------------------------------

// 2. Accessing the values of an Object using dot notation--->

console.log("\nAccessing Values Using Dot Notation");
console.log("My Name is : ", myDetails.name);
console.log("My age is : ", myDetails.age);
console.log("My qualification is : ", myDetails.qualification);
console.log("I live in: ", myDetails.address);

//NOTE: dot notation won't work while we accessing values using loops

//----------------------------------------

// 3. Accessing the values of an Object using Array notation--->

console.log("\nAccessing Values Using Array Notation");
console.log("My Name is : ", myDetails["name"]);
console.log("My age is : ", myDetails["age"]);
console.log("My qualification is : ", myDetails["qualification"]);
console.log("I live in: ", myDetails["address"]);


/* 
  NOTES: 
  bracket notation works with or without quotes around key names.
  bracket notation are more power-full than dot notation
*/