// copy this object properties using spread operator and Object.assign(emptyObject, previousObject)-

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

// way - 1----------------------------
// let  newDetails = myDetails;
// newDetails.name = "sandhu dwivedi";
// console.log(myDetails)
// console.log(newDetails)

// way - 2----------------------------

// let newObject = {}
// Object.assign(newObject, myDetails)
// console.log(newObject)

// way - 3----------------------------

let newPerson = {...myDetails};
newPerson.name = 'Surendra Jatav'   // it's working fine. 
newPerson.contact.mob = 9993945380  // but yaha par dono object ki properties change ho rahi h 

console.log(newPerson)
console.log(myDetails)
/*
    NOTE:
   -These method of cloning object and arrays is called shallow copy - 
   -In shallow copy we can modify properties individually only at theel i.e., if an object or array is nested inside another object/array then it won first lev't work. due to single memory-address both nested object are modified when we will modify any single object.

   Definition - 
   When a reference variable is copied into a new reference variable using the assignment operator, a shallow copy of the referenced object is created. In simple words, a reference variable mainly stores the address of the object it refers to. When a new reference variable is assigned the value of the old reference variable, the address stored in the old reference variable is copied into the new one. This means both the old and new reference variables point to the same object in memory. As a result, if the state of the object changes through any of the reference variables it is reflected for both.
*/