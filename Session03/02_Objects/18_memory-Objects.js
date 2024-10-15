let myName = 'Sandhya'

let obj1 = {
    name: 'Sandhya'
}

let obj2 = {
    name1: 'Sandhya'
}

let string1 = ''    // empty string
let string2 = ''

let arr1 = ['Surendra']
let arr2 = ['Surendra']

let fun1 = () => {}
let fun2 = () => {}

console.log(obj1 === obj2)  // output - false || memory-address === memory-address
console.log(obj1.name === obj2.name1)  // output - true || value === value

console.log(string1 === string2) // output - true || value === value

console.log(arr1 === arr2)  // output - false || memory-address === memory-address
console.log(arr1[0] === arr2[0])  // output - true || value === value

console.log(fun1 === fun2)  // output - false || reference or memory-address