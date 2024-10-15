// the statement that we wrote in previous file that JS Engine will wait for the promises to be resolved is not true then what is happening behind the scene let's see --

const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("I am resolved");
    }, 10000);  // it will resolved within 10 sec
})

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("I am resolved");
    }, 5000);   // it will resolved within 5 sec
})

async function handlePromise(){

    console.log("It will print immediately..")  // put the debugger here to see what is happening
    // js engine will wait for this promise to be resolved...  | this statement is false.. 
    const val = await promise1;     // put the debugger here to see what is happening
    console.log('God morning')
    console.log(val)

    const val1 = await promise2;    // put the debugger here to see what is happening
    console.log('good evening')
    console.log(val1)

}

handlePromise()


/*
    *What is happening behind the scene  - 
    when we call handlePromise function it will go inside the callStack and execute line number - 17 and then it will see after the line 17 there us promise that is resolved after 10 se so callStack will suspend the handlePromise function and it will out from the callStack (#because JS Engine never blocks callStack for anything) and the time will track by the jsEngine to be completed after 10 sec when promise1 will resolved handlePromise function again will come into the callStack and executing line where it has left the execution and when callStack again see that there is one more promises which will resolve after 10 sec then the handlePromise function will suspended for more 5 sec and when the time is completed the function again will come into the call stack and start executing lines where he left the execution..

    *NOTE: all the promises within an async function are registered in JS Engine at the same time and there countdown starts at the same time. So if 1st promise takes 10 sec to be resolved and 2nd promise takes 5 sec then after 10 sec both promises will be executed. 

*/