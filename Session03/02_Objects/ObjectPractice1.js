// var user1 = {}  // memory address - @566673
// var user2 = {}  // memory address - @1008129

// console.log(user1 == user2) // output - false 

// console.log(user1 == user1) // output - true

// let user1 = {
//     name : 'Surendra'   //@1935873
// }

// let user2 = {
//     name1 : 'Surendra'  //@1935873
// }

// console.log(user1.name === user2.name1) // output - true

//==========================================================

// nested object memory -

// let person = {  //@2659537
//     name: 'john',
//     age : 25,
//     address: {  //@2659539
//         street : "1234",
//         city : "New York" ,
//         latlong : { //@2811609
//             lat: 25135,
//             long: 12345
//         }
//     }
// }

//==========================================================

// How to clone objects and update new one- 

// let a = 5
// let b;
// b = a
// b = b+1
// console.log(a, b)

// //==============

// let obj1 = {
//     name: 'Sandhya'
// }


// let obj2;

// obj2 = obj1 // same memory address ko point krega

// obj2.name = 'Sandhya Dwivedi'

// console.log(obj1)
// console.log(obj2)

//==================================================


// shallow copy - copy object using spread operator - 
let person = {  //@12345
    name: 'Surendra',
    age: 25,
    address: {     //@67890
        city: "Delhi",
        country: "India"
    }
}

const shallowCopyPerson = {...person};  // @421541

shallowCopyPerson.name = 'Suru';
shallowCopyPerson.address.city = 'Indore';

console.log(person)
console.log(shallowCopyPerson)


const arr = [10,20,30,40] , arr1 = ['a', 'b', 'c'] 
const deepCloneArray = [...arr, ...arr1]
console.log(deepCloneArray)
