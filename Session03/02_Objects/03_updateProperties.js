/*
    Update Properties to of any object --
    Syntax - 
    objName.existingProperty_name = updated_Value
*/

let myDetails = {
    name: 'Sandhya Dwivedi',
    age: 24.5,
    qualification: 'M.Sc.',
    address: 'Indore MP',
    email: 'dwivedisandhya389@gmail.com',
    linkedIn: 'Undefined',
    permanentAdd: 'Sausar Chhindwara (M.P)',
    hobbie: 'Exploring',
    hobbie1: 'Innovating'
}
console.log('Before Updating Properties - ', myDetails)
 
// update some properties-->
myDetails.age = 25
myDetails.linkedIn = 'sandhya-dwivedi-3113b2237'


// delete some Properties -->
delete myDetails.hobbie1


console.log('\nAfter Updating Properties - ', myDetails)
