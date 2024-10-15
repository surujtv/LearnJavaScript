/*
    In JavaScript, you can use the concat() method to merge two or more arrays. The concat() method does not change the existing arrays but instead returns a new array that is the combination of the given arrays.
*/

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let newArray = array1.concat(array2, array3);

console.log(newArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]