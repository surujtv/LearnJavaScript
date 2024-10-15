
// Some Predefined Methods to access keys and values -->

// Access Keys --> Object.keys(obj_name) -- this methods returns an Array of keys of an Object

let myDetails = {
    name: "Sandhya Dwivedi",
    age: 24.5,
    qualification: "M.Sc.",
    address: "Indore MP", 
    email: "dwivedisandhya389@gmail.com",
    linkedIn: "sandhya-dwivedi-3113b2237",
    permanentAdd: "Sausar Chhindwara (M.P)",
    hobbie: "Exploring",
    hobbie1: "Innovating",
};


console.log('Keys --------------')
console.log(Object.keys(myDetails)) // output - [key1,key2.....last_key]

//---------------------------------------------------------------------------


// Access values --> Object.values(obj_name) -- this methods returns an Array of values of an Object
console.log('Values --------------')
console.log(Object.values(myDetails));

//---------------------------------------------------------------------------

// Access key & value both together using Object.entries(obj_name)
console.log('Key & Values --------------')
console.log(Object.entries(myDetails));


//---------------------------------------------------------------------------
// Find Length of the object using - length property ->

// console.log("Length of the object is : ", myDetails.length); //Note Working
console.log('Find Length --------------')
console.log('object length: ', Object.keys(myDetails).length)  // Output length of the object