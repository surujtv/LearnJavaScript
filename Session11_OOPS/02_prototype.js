//*JavaScript implements inheritance by using objects. Each object has an internal link to another object called its prototype.

/*  
    __proto__, [[prototype]]
    The __proto__ property is an internal property of every JavaScript object that points to its prototype (parent). It is used to implement prototype inheritance in JavaScript. The prototype of an object is another object that it inherits properties from. When you access a property on an object, JavaScript will first look for the property on the object itself. If the property is not found on the object itself, JavaScript will then look for the property on the object's prototype. This process continues up the prototype chain until the property is found or the end of the prototype chain is reached.

    prototype {}
    *prototype are empty objects and only presents with functions internally.
    The difference between `__proto__` and `prototype` is simple: `__proto__` is a property of an object instance, while `prototype` is a property of a constructor function.
    
    
    *__proto__, [[prototype]] and prototype are two different things

*/

// var user = {
//     name: 'surendra'
// }
// console.log(user)

// var array = [10,20,30,40]
// console.log(array)

function greet(){
    console.log('hello')
}
console.dir(greet)



//============================================

// const emptyObj1 = new Object()
const emptyObj2 = {
    a: 'a'
}
console.log(emptyObj2)


const emptyObj3 = Object.create(emptyObj2)  
// const emptyObj3 = new Object(emptyObj2)
// emptyObj3.a = 'hello'
emptyObj3.b = 'b'
console.log(emptyObj3)
// console.log(emptyObj3.__proto__)

//Object.create() method is used to inherit properties from objects and return a new empty object.  
// emptyObj3.b = 'b'

const emptyObj4 = Object.create(emptyObj3)  
emptyObj4.c = 'c'
emptyObj4.d = 'd'

console.log(emptyObj4)


//how to get own properties of an object.
for (const key in emptyObj4) {
    // console.log(key)
    if(emptyObj4.hasOwnProperty(key)){
        console.log(key)   
    }
}
console.log(emptyObj4.hasOwnProperty('b'))   



// console.log(emptyObj2.a)
// console.log(emptyObj3.a)
// console.log(emptyObj4.b)
// console.log(emptyObj4.a)

// console.log(emptyObj1)

//============================================

// const arr = new Array()
// arr.push('a')

// console.log(arr)

// // const arr1 = Array.create(arr)   // not working

// arr.__proto__.nayiProperty = function(){
//     console.log('hello')
// }

// console.log(arr.__proto__)