// this Method is same like forEach but the major difference is  that it will return a new array instead of modifying existing one
// and secondly, it can take any number of arguments.

let array = [1,2,3,4,5]

const newArray = array.map((ele, index, array)=>{
    if(index == 0){
        console.log("Whole Array")
    }
    console.log(array)
    if(ele == 3){
        return ele*2
    }else{
        return ele*0
    }
})

console.log(newArray)

console.log(array)