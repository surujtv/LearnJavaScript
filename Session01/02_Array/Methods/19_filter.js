/*
    filter method is used to filter an array it returns a filtered array.
*/

let name = ['Surendra 😎', 'Jitendra', 'Sheetal', 'Govind', "Kaushal", 'Nisha']

let filteredArr = name.filter((myName)=>myName !== "Surendra 😎")

console.log(filteredArr)

// we can do this by using map() but it doesn't affect the length of the array
let mapArr = name.map((myName)=>myName == "Jitendra" ? myName: null)

console.log(mapArr) 

