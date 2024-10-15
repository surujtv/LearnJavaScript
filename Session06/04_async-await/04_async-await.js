// Example - 3 what if we have two promises and they resolved different time period 

const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("I am resolved");
    }, 10000);  // it will resolved within 10 sec
})

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("I am resolved");
    }, 5000);   // it will resolved within 5 sec
})

async function handlePromise(){

    console.log("It will print immediately..")
    // js engine will wait for this promise to be resolved...   
    const val = await promise1;
    console.log('Hello Sandhya 5 sec')
    console.log(val)

    const val1 = await promise2;
    console.log('Hello Sandhya 10 sec')
    console.log(val1)

}

handlePromise()

//We resolving to promises in an async function where first promise takes 10 sec to be resolve and 2nd promises takes 5 sec to be resolve what will happen now will 2 nd promises will resolved before 1st promises or it will wait for the 1st promises to be resolved and execute. what's the output - 

// And what if we reverse the order of promises-- 1st promise resolved in 5 sec and 2nd will resolved in 10sec guess the output -