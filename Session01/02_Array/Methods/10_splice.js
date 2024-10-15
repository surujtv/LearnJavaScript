// arr_name.splice(parameter1, parameter2, parameter3) 

/*
    first argument: index value from where you want to remove elements
    second argument: elements counts to be removed
    third argument: element names you want to add 
*/

let arr = [10,20,30, 'Surendra', 'Jatav',26]

arr.splice(3, 2, 'Sandhya', 'Dwivedi')
console.log('Modified Array-->')
console.log(arr);   // output--> [10,20,30, 'Sandhya', 'Dwivedi',26]

