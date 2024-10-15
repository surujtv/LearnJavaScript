//check how promises work behind the scene.

console.log('Code Start...')

function delay1(){
    console.log('Code Running Asynchronously... 3Sec')
}

function delay2(){
    console.log('Code Running Asynchronously... 6Sec')
}
function delay3(){
    console.log('Code Running Asynchronously... 9Sec')
}


setTimeout(delay1, 3000)    
setTimeout(delay2, 6000)
setTimeout(delay3, 9000)


const promise1 = new Promise((resolve, reject)=>{
    if(true){
        resolve('Promise Resolved')   // we can send data as an argument inside resolve
    }else{
        reject('Promise Rejected')    // we can send Error string as an argument in this function
    }
})

const promise2 = new Promise((resolve, reject)=>{
    if(false){
        resolve('Promise Resolved')   // we can send data as an argument inside resolve
    }else{
        reject('Promise Rejected')    // we can send Error string as an argument in this function
    }
})

promise1.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

promise2.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})


for(let i = 1; i <=10; i++){
    console.log('Loop iterating')
}

console.log('Code End...')