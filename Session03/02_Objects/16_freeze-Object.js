/*
    Object.freeze(object-name) : if we don't want to delete, add or modify any property in Object then use this method. This method is used to prevent object by delete, add or modify any property.
*/


const myDetails = {
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

Object.freeze(myDetails)

const isDeleted = delete myDetails.skills   // returns boolean value
myDetails.name = 'Surendra Jatav'   // modify bhi nahi kr sakte.

console.log(isDeleted) // output - false
console.log('After applied method : ', myDetails)

// How to freeze specific property in any Object - 
const obj = {
    uuid: '123e4567-e89b-12d3-a456-426655440000',
};
  
Object.defineProperty(obj, "uuid", {
    configurable: false,
    writable: false,
});