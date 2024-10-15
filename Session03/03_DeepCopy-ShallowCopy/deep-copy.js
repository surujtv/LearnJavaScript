/*
    Definition - 
    Unlike the shallow copy, deep copy makes a copy of all the members of the old object, allocates a separate memory location for the new object, and then assigns the copied members to the new object. In this way, both the objects are independent of each other and in case of any modification to either one, the other is not affected. Also, if one of the objects is deleted the other still remains in the memory. Now to create a deep copy of an object in JavaScript we use JSON.parse() and JSON.stringify() methods.  
*/

let myDetails = {
    name: "Sandhya Dwivedi",
    age: 24.5,
    qualification: "M.Sc.",
    address: {
        add: 'Vijay Nagar',
        city: "Indore",
        pincode: 452010,
        state: "Madhya Pradesh",
        latlong: {
            latitude: 21.1766,
            longitude: 75.8966
        }
    },
    contact: {
        mob: '799-9541-444',
        email: 'dwivedisandhya389@gmail.com',
        linkedIn: 'sandhya-dwivedi-3113b2237' 
    },
    skills: ['C','C++', 'HTML', 'CSS', 'JS'],
    hobbies:['Exploring', 'Innovating', 'Singing']
}
// console.log(myDetails)


// step 1- convert original object into JSON string

const JSONstring = JSON.stringify(myDetails)
// console.log(JSONstring)

// step 2 - convert this JSON string into  a JavaScript Object using parse() method of JSON
const newObject = JSON.parse(JSONstring)
// console.log(newObject)

// let newPerson = JSON.parse(JSON.stringify(myDetails));
newObject.name = 'Surendra Jatav'   // it's working fine. 
newObject.contact.mob = 9993945380  // now it's also working fine.
newObject.skills.push('ReactJS')
newObject.address.latlong.latitude= 12341516

console.log(myDetails)
console.log(newObject)