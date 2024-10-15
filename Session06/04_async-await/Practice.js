
// lets create async function - 

// function msg(){
//     return 'sandhya dwivedi'
// }

// const returnedmsg = msg()
// console.log(returnedmsg)    // sandhya dwivedi

// const msg1 = async function (){

// }

// const msg2 = async () => {
//     // return new Promise((resolve, reject)=>{
//     //     resolve('sandhya dwivedi')
//     // }) 
//     return 'sandhya dwivedi'    
// }

// const promise = msg2()  

// console.log(promise)    // output - promise object

// promise.then((data)=>{
//     console.log(data)   // output - sandhya dwivedi
// }).catch((err)=>{
//     console.log(err)
// })

// sabse pehle javascript engine iss async function ko padhega and fir vo iske andar check krega ki isme promise return kar rhe h ya nahi agr kar rhe h to vo us promise ke code ko run krega otherwise jo string ya koi value return krva rhe h usi ko vo promise ki value cosider krke ek new Promise m wrap krke return dega. agr kuchh bhi return nahi krenge tab bhi vo ek promise return krega aur uski state fulfilled hogi.


//=======================================================

//* see some difference between async/await & then/catch


const promise1 = new Promise((resolve, reject)=>{
    
    setTimeout(()=>{
        
        resolve('promise resolve...')

    }, 5000)
})

async function getData(){

    console.log('Code Start...')

    const result = await promise1   //js engine will wait here

    console.log(result) //output -  promise resolved...

    console.log('Other Code...')
}


function getDataThen(){

    console.log('Code Start...')

    promise1.then((data)=>{
        console.log(data)
    })   //js engine will not wait here

    console.log('Other Code...')
}

// getData()
getDataThen()

//=======================================================

