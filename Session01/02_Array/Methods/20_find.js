//the find() method is used to search for an element in an array. It returns the first element in the array that matches the provided function. If no element matches the provided function, it returns undefined.

let arr = [
    { name: 'John', age: 20 },
    { name: 'Peter', age: 25 },
    { name: 'Mary', age: 30 },
    { name: 'Jary', age: 20 }
]

const result = arr.find((obj)=>obj.age>=20)
console.log(result) // Output - { name: 'John', age: 20 }