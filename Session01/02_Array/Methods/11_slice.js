// arr_name.slice(para1, para2)
/*
    para1 - index value from you want to extract
    para2 - index value till you want to extract
    no-parameters - if no parameters given it will return full array.
*/


//The slice() method extracts a section of an array and returns it as a new array, without modifying the original array.

let arr = [10,20,30, 'Surendra', 'Jatav',26]

let newArr = arr.slice(3, 5);

console.log("Existing Array")
console.log(arr);   // output --> [10,20,30, 'Surendra', 'Jatav',26]

console.log('===========================')

console.log("new Array as a slice-->")
console.log(newArr);    // output--> [ 'Surendra', 'Jatav' ]

// one more use-case we can create a clone using slice method - 

let fruit = ['apple','banana','cherry'];

let copyFruit = fruit.slice();     // this is the best way of creating a clone in JavaScript.
copyFruit.push('mango');          // adding an item into copied array not affecting original array.

console.log('Previous-Array : ', fruit)
console.log('New-Array : ', copyFruit)