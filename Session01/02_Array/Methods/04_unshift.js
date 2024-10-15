// arr_name.unshift(element) method--> it add an elements to array from its first index

let arr = [10,20,30, 'Surendra']
console.log('Original Array: '+arr) // output--> [10,20,30, 'Surendra']

console.log('====================================')

arr.unshift('Hii');
console.log('After unshift Method: '+arr)   // output--> ['Hii',10,20,30,'Surendra']
