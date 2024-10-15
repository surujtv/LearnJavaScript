/*
    Access Properties and values using loops--
*/

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

// For in Loop  -->
/*
    Syntax -->  
    for (const var_name in obj_name) {
        NOTE: 
        key variable access proprties of an object
        obj_name[key] - access values of properties
}
*/

for (const key in myDetails) {
  console.log(`${key} : ${myDetails[key]}`);    // all values and properties will be printed 
}


/*
  NOTE: 
  for of loop doesn't work for object.
  while using loop always use array notation to access values.
*/ 
