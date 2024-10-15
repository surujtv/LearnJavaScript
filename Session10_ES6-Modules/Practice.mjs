/*
    Module - 
    Every individual JavaScript file is module in JS.

    A module in JavaScript is just a file containing related code. In JavaScript, we use the import and export keywords to share and receive functionalities respectively across different modules. The export keyword is used to make a variable, function, class or object accessible to other modules.

    Why - 
    to share functionality between modules (JavaScript).

*/



// export default name = 'Surendra'
var name = 'Surendra'

console.log('Ye file pehle run hogi')

const object = {
    name: 'Surendra',
    age: 26
}

const arr = ['Sandhya', 25]

const func = () => {
    console.log('Hello World')
}

// ES5 - 
// module.exports = {name, object, arr, func}

// ES6 - 

// named export -
// export { name }
export { object, arr, func }

// default export - 

export default name
// export default {object, arr, func}