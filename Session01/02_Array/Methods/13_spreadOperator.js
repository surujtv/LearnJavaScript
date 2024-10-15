// spread operator (...objName) creates a copy of an objects then we can use that copy according to our logic--->


// logic1 - we can use spread to merge arrays-->

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let newArray = [...array1, ...array2, ...array3]
// it take copy of existing arrays and store in new array

console.log(newArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]