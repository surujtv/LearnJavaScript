// Produce Promise -

// console.log('Start....')

// const promise = new Promise((resolve, reject)=>{    // we can call this callback executer function too.
//     setTimeout(()=>{
//         if(false){
//             resolve('Promise Success')
//         }else{
//             reject('Promise failed')
//         }
//     }, 0)

// })

// setTimeout(()=>{
//     console.log('Inside Timeout')
// }, 0)

// //  Consume  Promise -

// promise.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.error(err)
// })

// console.log('End....')

//======================================================

// return promise in function -

function returnPromise() {
  //produce promise -

  const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if (true) {
            resolve("Promise Success");
          } else {
            reject("Promise failed");
          }
        }, 5000);
    })
    console.log(promise)
    return promise
}

// consume promise -

const promise1 = returnPromise()

promise1.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.error(err)
})

//======================================================

// New and Easy way - to return promise from any function - 

// function returnPromise() {
//   //produce promise -

//   return new Promise((resolve, reject) => {
//     if (true) {
//       resolve("Promise Success");
//     } else {
//       reject("Promise failed");
//     }
//   });
// }

// // consume promise -

// returnPromise()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// //======================================================

// // then bhi promise return karata hai chalo check karte hai...

// function promiseObject(){
//     return new Promise((resolve, reject)=>{

//         const sandhyakiAge = 25
//         if(sandhyakiAge === 25){
//             resolve("Sandhya")
//         }else{
//             reject("Sandhya ki Age 25 years old nahi hai")
//         }

//     })
// }

// Promise.resolve('sandhya').then((value)=>{
//     console.log(value)
// })   // *Note : ye produce Promise aur consume promise ka short tareeka hai likhne ka.


// promiseObject()
//     .then((data1)=>{
//         return data1
//         // return Promise.resolve(data1)    // behind the scene.  
//     })
//     .then((data2)=>{
//         console.log(data2)   // output - sandhya
//         return data2 + ' Dwivedi'
//         // return Promise.resolve(data2 + ' Dwivedi')
//     })
//     .then((data3)=>{
//         console.log(data3)  // output - sandhya Dwivedi
//     })
//     .catch((err)=>{
//         console.error(err)
//     })

//*Note: nested use of then method is called promise chaining..

//======================================================
