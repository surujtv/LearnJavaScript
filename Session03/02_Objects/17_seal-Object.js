/*
    Object.seal(object-name) : if we don't want to delete or add any property in Object then use this method. This method is used to prevent object by delete or add any property. but we can modify existing properties.
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

Object.seal(myDetails)

const isDeleted = delete myDetails.skills   // returns boolean value
myDetails.name = 'Surendra Jatav'   // modify kr sakte hai

console.log(isDeleted) // output - false
console.log('After applied method : ', myDetails)