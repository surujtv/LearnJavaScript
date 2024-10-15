// Accesing array elements using forin loop

let arr = [1,2,3,4,5,'Surendra', 'Jatav']

// Single elements access--->
console.log(arr[5]) // output--> Surendra


console.log('===================================')

// all elements access-->
for(let index in arr){
    console.log('Index Value: '+index+' | element : '+ arr[index]);
    // index variable accessing the index values of given arr
}

// NOTE* bydefault loop iterate upto last index of array