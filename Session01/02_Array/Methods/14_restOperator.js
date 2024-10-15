// Rest operatore is used to create an array of rest elements it is denoted by (...var_name)
// it is only used in functions as an last argument

// Example---->

function sandhya (name, age, add, ...skills) {
    console.log('Name : '+name)
    console.log('Age : '+age)
    console.log('address : '+add)
    console.log('Skills : '+skills) // this variable return an array of rest elements which is passed at the time of function calling  
}

// invoke that function--->

sandhya('Sandya Dwivedi', 24.5, 'Indore', 'C', 'C++', 'HTML', 'CSS', 'JS-Running', 'Singing');

