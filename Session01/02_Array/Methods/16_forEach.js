// These Method access all the elements presents in the array and returns modified elements-->
//NOTE: it takes a callback function
// Definition : it used to iterate each element in the array and can modify array elements.

let array = [1,2,3,4,5]

// console all elements --
array.forEach((ele)=>{
    console.log(ele)
})  // all elements will be printed


//  multiply by 2 to each element of array --->
array.forEach((ele)=>{
    console.log(ele+ "*" + "2 : " + ele * 2)
})

/*
    it takes upto 3 arguments ---->
    1. first argument is the current value of an element in the array.
    2. second argument is the index of that element.
    3. third argument is the original array itself.
*/
array.forEach((ele, index, array)=>{
    if (index == 0){
        array[index] = -ele     // make first element negative
    }else{
       array[index] =  2*ele      // multiply other elements by 2
    }
    if(index == 0){
        console.log("Printing Whole array--> ")
    }
    console.log(array)
})



//=======================================
// check alphabate count in array-->

let letters = ['s', 'u', 'r', 'e', 'n', 'd', 'r', 'a']

let count = {}
letters.forEach((letter)=>{
    if (count[letter]){
        count[letter]++
    }else{
        count[letter] = 1
    }
})

console.log(count)