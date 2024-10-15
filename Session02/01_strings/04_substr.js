// 1. substr(fromIndex, lenth of characters you want to remove) depreacated 

// 2. Instead of above use substring(start index value, Index value up to)
let str = 'My name is Surendra Jatav. I am from Shivpuri'
console.log(str)
let substr = str.substring(27, 45)  // returns new string

console.log(substr);
console.log(str) // dosn't affect  previouse string

// *NOTE:  working like a slice Method-->
 