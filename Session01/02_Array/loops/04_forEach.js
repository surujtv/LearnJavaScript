// Accesing array elements using forin loop

let arr = [1,2,3,4,5,'Surendra', 'Jatav']

// Single elements access--->
console.log(arr[5]) // output--> Surendra


console.log('===================================')

// all elements access--> forEach Method/Loop take a callback
arr.forEach((Element)=>{
    console.log(Element)
})

// NOTE* bydefault these loops iterates upto last index of array