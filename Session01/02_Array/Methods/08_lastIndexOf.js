// arr_name.lastIndexOf(element) --> returns last index value of given element if it's present in the array

let arr = [10,20,30, 'Surendra', 'Jatav',26, 28,6,6,6,'Hii']

// if element present in the array-->
console.log(arr.lastIndexOf('Surendra'));   // output --> 3

// if element not present in the array
console.log(arr.lastIndexOf('Sandhya'));   // output (-1)

// if same element present in the array multiple times--->
console.log(arr.lastIndexOf(6));   // output (9)
