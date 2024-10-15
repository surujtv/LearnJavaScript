// How fetch method works actually - fetch()
// suppose we have an API to get data from the server -

const API_URL = "https://jsonplaceholder.typicode.com/users"

async function handlePromise(){

    // it will return promise so it will wait for some time for that time this async function will suspended from the callStack once the promise resolved it will again comeback to the callStack and executing code where it left.
    // after resolved it returns a responseObject that is a readable streame not actual data so we have to convert it into the jsonValue.  
    const responseObject = await fetch(API_URL)

    console.log(responseObject)

    //.json() again returns a promise same process will be repeated.
    const jsonValue = await responseObject.json()

    console.log(jsonValue)

}

handlePromise()