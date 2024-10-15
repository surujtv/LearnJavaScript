// Accesing array elements using for loop

let arr = [1,2,3,4,5,'Surendra', 'Jatav']

// Single elements access--->
console.log(arr[5]) // output--> Surendra


console.log('===================================')

// all elements access-->
for(let iterator=0; iterator<arr.length; iterator++){
    console.log('Index Value: '+iterator+' | element : '+ arr[iterator]);
}