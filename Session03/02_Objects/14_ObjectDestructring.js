/*
  Definition - 
  Destructuring is a convenient way to extract values from arrays and objects and assign them to  variables. 
  It makes your code cleaner and more concise.
*/


const myDetails = {
    name: "Sandhya Dwivedi",
    age: 24.5,
    qualification: "M.Sc.",
    address: "Indore MP",
    email: "dwivedisandhya389@gmail.com",
    linkedIn: "sandhya-dwivedi-3113b2237",
    permanentAdd: "Sausar Chhindwara (M.P)",
    hobbie: "Exploring",
    hobbie1: "Innovating",
  };

// in JavaScript if we want to access any of the property of an object then we use dot notation or square bracket notation.
console.log('Dot notation ===================>')
console.log(myDetails.name, myDetails.age, myDetails.address)

console.log('\nBreacket notation ===================>')
console.log(myDetails["email"], myDetails["linkedIn"], myDetails["permanentAdd"])

// but using destructuring we don't need any dot notation or  bracket notation to access the properties of an object simply the values of an object stored in specific variables as follows-
const {name, age, qualification, address, email, linkedIn, permanentAdd, hobbie, hobbie1} = myDetails;

// now we can use above parameters just like a javaScript variables --
console.log('\nAfter Destructuring use of variables ===========>')
console.log(`Hi my Name is ${name}`)
console.log(`I am a ${age} year old student`)
console.log(`I am from ${permanentAdd}`)
console.log(`I have done my ${qualification} from acropolic university`)
console.log(`I love ${hobbie} and ${hobbie1}`)


