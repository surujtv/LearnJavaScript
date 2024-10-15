let arr=[10,20,30,40] // Normal arr 1D

// 2D Array Declaration (multiple arrays inside a array)
let arr1 = [
   [10,20,30,40],
   [50,60,70,80],
   [1,2,3,4,5]
]

// access----> single element

console.log(arr1[0]);       // output--> [ 10, 20, 30, 40 ]
console.log(arr1[0][3]);    // output--> 40


//============================================================================

// all element access--> using loop
/*
    1. outer loop iterate for parent Array
    2. inner loop iterate for child Arrays
    3. when outer loop iterate inner loop will be iterate upto child array length
*/


for(let i=0; i<arr1.length; i++){
    for(let j=0;j<arr1[i].length;j++) {
        console.log(arr1[i][j]);
    }
    console.log('====')
}