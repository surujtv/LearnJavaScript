/*
    in Operator is used to check Properties exist in the object or not -
    it returns boolean value - (true | false)

    Syntax - 
    let var_name = property_name in object_name
*/

let myDetails = {
    name: 'Sandhya Dwivedi',
    age: 24.5,
    qualification: 'M.Sc.',
    address: 'Indore MP',
    email: 'dwivedisandhya389@gmail.com',
    linkedIn: 'sandhya-dwivedi-3113b2237',
    permanentAdd: 'Sausar Chhindwara (M.P)',
    hobbie: 'Exploring',
    hobbie1: 'Innovating'
}

// check address is available or not-->

let result = 'address' in myDetails
console.log(result) // Output -- true

// check mobile is available or not-->
result = 'mobile' in myDetails
console.log(result) // Output -- false
