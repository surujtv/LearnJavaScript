/*
    Promise - 
    In JavaScript, a Promise is an object that will produce a single value some time in the future. If the promise is successful, it will produce a resolved value, but if something goes wrong then it will produce a reason why the promise failed. The possible outcomes here are similar to that of promises in real life.

    *The Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and returns it's resulting value.
    
    provided by the browser. browser tracks all promises asynchronously.

    tasks presents in the promises handled by microTask Queue...
    #mutation observer - baad m padhna hai.

    State of promises -
    1.  pending
    2.  fulfilled   - data / response
    3.  rejected    - reason

    .then(callback) - called when promise resolved
    .catch(callback) - called when promise rejected
    .finally() - called every time when promise settled or completed.

    SYNTAX - 
    const promise = new Promise((resolve,reject)=>{
        if(true){
            resolve('Promise Resolved')   // we can send data as an argument inside resolve
        }else{
            reject('Promise Rejected')    // we can send Error string as an argument in this function
        }
    });

    Handle Promise - 
    promise.then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})

    NOTE: 
    .then and .catch also returns promises. that can be handle by .then() and .catch()
    Promises Object is immutable.

    *Remember Some terms - 
    *Settled - either rejected or resolved (completed)
    *fulfilled - get resolved
    *resolved - success 
    *rejected - failed | reject
    *failure -  reject
*/

// create a simple promise - 


// we use Promise() constructor to create new promise object. and it will receive a callback and this callback takes two parameter which is predefined functions resolved and reject.
//*Order is important for callback parameters.

const promise = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        resolve('Promise Success !')
        // reject('Promise Failed !')
    }, 5000)

})
console.log(promise)


promise.then((data)=>{
    console.log(data)
    // console.log(promise)
}).catch((err)=>{    // *Error Handling...
    console.log(err)
})


//==========================================

const p = new Promise((resolve,reject)=>{
    if(true){
        resolve('Promise Resolved')   // we can send data as an argument inside resolve
    }else{
        reject('Promise Rejected')    // we can send Error string as an argument in this function
    }
});

// p.then((data)=>{
//     console.log("Inside then : ",data);
// }).catch((err)=>{console.log("Inside Catch : ",err)})


