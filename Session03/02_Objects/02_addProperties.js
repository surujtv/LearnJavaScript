/*
    How to add Properties to any Object-
    Syntax - 
    obj_name.property_name = property_value.
*/

let myDetails = {
    name: 'Sandhya Dwivedi',
    age: 24.5,
    qualification: 'M.Sc.',
    address: 'Indore MP'
}
console.log('Before Adding Property - ', myDetails)

// Add Properties--

myDetails.email = 'dwivedisandhya389@gmail.com'
myDetails.permanentAdd = 'Sausar Chhindwara (M.P)'
myDetails['is-married'] = false; // using bracket notation

console.log('\nAfter Adding Property - ', myDetails)

