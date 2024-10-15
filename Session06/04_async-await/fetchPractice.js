/*
    *it is provided by browser
    *It is based on Promise
    *It returns a response object when response came from an API.

*/

const API = "https://jsonplaceholder.typicode.com/users";

//GET Request   -   through then and catch  

//GET Request - READ
//POST Request - CREATE
//PUT Request - UPDATE
//DELETE Request - DELETE

// fetch(API)
//   .then((response) => {
//     // console.log(response)    //  pehle response m actual data nahi milta
//     // console.log(response.json()) //  ye ek promise return krega    
//     return response.json();     //    
//   })
//   .then((data) => {
//     console.log(data);
//     // data.map((object)=>{     // we can use this data accordingly
//         // console.log(object.address)
//     // })
//   })
//   .catch((err)=>{
//     console.log(err);
//   })


async function getData(){
    
    const response = await fetch(API)

    const data = await response.json()

    console.log(data)
}

getData()