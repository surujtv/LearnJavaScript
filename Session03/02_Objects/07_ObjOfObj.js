/*
    Object inside Object -- Nesting of Objects
    Array inside Object --
*/

//-------------------------------------------------------------------


//Create Nested Object -->

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

//NOTE: An object can store any type of data (Array, Object, Functions etc.)

//-------------------------------------------------------------------

// How to Access all Properties of Nested Object.--->
