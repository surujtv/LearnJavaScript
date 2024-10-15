// Example - 2 what if we resolved a promise twice - in a single async function - 

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("I am resolved");
    }, 5000);
})

async function handlePromise(){

    console.log("It will print immediately..")
    const val = await promise;  
    console.log('Hello Sandhya')
    console.log(val)

    const val1 = await promise; 
    console.log('Hello Sandhya')
    console.log(val1)

    // in async await js engine will wait for line number
}

handlePromise()

// We resolved a promise twice in an async function using await keyword which takes 10 sec to be resolved and we know that await keyword wait for promises to be resolved then it will execute the next line so the question 2nd promise execution will wait for another 10 sec or it will resolved at the same time while 1st execution will resolved- whats the output of the function - 


// let's make it more complicated so let's try next example which is in file no. 4 