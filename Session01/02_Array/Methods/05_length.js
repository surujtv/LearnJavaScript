// arr_name.lentgh() 
// method--> it returns length of an array (how many elements are exist in the array)--->

let arr = [10,20,30, 'Surendra', 'Jatav']
let length = arr.length // returns an int value --> here length var store that value
console.log(length);       // Output--> 5

// console.log(arr.length)   // output: 5 iss type se bhi kr sakte h print variable m store krne ki jarurat nhi h


console.log('====================================')

arr.unshift('Hii');
console.log('After unshift Method: '+arr)   // output--> ['Hii',10,20,30,'Surendra', 'Jatav']
let newlength = arr.length  // new length of modified array
console.log(newlength)  // output --> 6
