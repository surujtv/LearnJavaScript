// arr_name.pop() --> it remove an elements from array from its last index

let arr = [10,20,30, 'Surendra']
console.log('Original Array: '+arr) // output--> [10,20,30, 'Surendra']

console.log('====================================')

let  popedElement = arr.pop(); // here we store the removed element in a variable
console.log('After pop Method: '+arr)   // output--> [10,20,30]
console.log("Removed Element Returned : " + popedElement)   //  output--> Removed Element Returned : Surendra