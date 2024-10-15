//Reverse String-->

let str = 'abcde'    // cant reverse with this logic
//  let str = [10,20,30,40,50]

let strArr = str.split("")
console.log("Before : "+str)

for (let i = 0; i<strArr.length/2; i++) {
    let temp;
    temp = strArr[i]
    strArr[i] = strArr[strArr.length-1-i];
    strArr[strArr.length-1-i]=temp;
}

str = strArr.join("")
console.log("After : ",str)