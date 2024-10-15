// arr_name.push(elements) method--> it add an elements to array from its last index

let arr = [10,20,30, 'Surendra']
console.log('Original Array: '+arr) // output--> [10,20,30, 'Surendra']

console.log('====================================')

arr.push('Jatav');  // single element
console.log('After push Method: '+arr)  // output--> [10,20,30, 'Surendra', 'Jatav']

console.log('====================================')

arr.push('hey', 23, 24.5, null, undefined);  // multiple elements
console.log('After push Method: \n'+arr)
// output--> [10,20,30, 'Surendra', 'Jatav', 'hey', 23, 24.5,,]
