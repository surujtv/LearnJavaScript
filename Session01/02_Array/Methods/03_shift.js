// arr_name.shift() method--> it removes an elements from array from its first index

let arr = [10,20,30, 'Surendra']
console.log('Original Array: '+arr) // output--> [10,20,30, 'Surendra']

console.log('====================================')

let  removeElement = arr.shift(); 
console.log('After shift Method: '+arr)   // output--> [20,30, 'Surendra']
console.log("Removed Element is : "+removeElement);    // output--> 10