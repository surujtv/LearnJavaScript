/*
    Promise has three states - 
    01 pending
    02 Fulfilled (resolved)
    03 Rejected 

*/

// cerate a promise - 

const promise = new Promise((resolve, reject)=>{
    // do something here and then call either resolve or reject function.
    // this is the initial state of the promises. 
    // we didn't call resolve or reject function that's because our promise is in pending state..
})

console.log(promise)