/*  
    The Javascript arr.reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array (from left to right) and the return value of the function is stored in an accumulator.
    
    Note:At the first callback, there is no return value from the previous callback.

    Normally, array element 0 is used as initial value, and the iteration starts from array element 1.+

    If an initial value is supplied, this is used, and the iteration starts from array element 0.
*/

let arr = [1,2,3,4,5,6]
// let sum = 0
// arr.forEach((ele)=>{
//     sum += ele
// })
// console.log(sum)

let sum = arr.reduce((num, num2)=>{
    return num * num2
})

/*
    In CallBack function-->
    first argument takes its initial value.
    second argument takes each elements from array
*/

console.log(sum)