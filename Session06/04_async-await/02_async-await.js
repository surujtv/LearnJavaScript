/*
    async and await combo is used to handle promises..

*/

// Example - 1  difference between then catch method and async await

const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("I am resolved");
    }, 2000);
})


async function handlePromise(){

    console.log("It will print immidiately..")
   
    const val = await p;    // js engine will wait here... for value
    console.log('Hello Sandhya')    
    console.log(val)
}

handlePromise()


function getData(){ // before async-await
    // JS Engine will not wait for promise to be resolved
    p.then((data)=>{
        console.log(data)
    })

    console.log('Hello JavaScript')

    // problem - js not wait for line number 25
}

getData()

// Next Example in file no. 3 
//=========================================================

