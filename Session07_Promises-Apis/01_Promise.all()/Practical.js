/*
    Definition - 
    The Promise.all() static method takes an iterable of promises as input and returns a single Promise. It will wait for all the promises will get successful then it will return all the values in the form of array. 
    if any promise get rejected it will return a Error immediately of that particular Promise No matter other promises are settled or not. it will not move ahead.
*/

/*
    *NOTE:
    *if all promises will success it will wait for the other promises to be completed.
    *if any of the promises will fail promise.all() will also fail and throw an Error immediately it will note wait for other promises to be completed. 

    SYNTAX - 
    const result = Promise.all([promise1, promise2, promise3])
  
*/

// let's see an Example -
// create 3 promise calls -

// success / resolve -

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Promise 1 is reject within 8 sec");
//   }, 8000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Promise 2 is reject within 1 sec");
//   }, 1000);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Promise 3 is resolved within 5 sec");
//     reject("Promise 3 is reject within 5 sec")
//   }, 5000)
// });

async function getPromiseResult() {
  const url1 = 'https://jsonplaceholder.typicode.com/posts'
  const url2 = 'https://jsonplaceholder.typicode.com/comments'
  const url3 = 'https://jsonplaceholder.typicode.com/albums'
  const url4 = 'https://jsonplaceholder.typicode.com/photos'

  try {

    const result = await Promise.all([fetch(url1), fetch(url2), fetch(url3), fetch(url4)]);

    // const data = await result.json()
     for(let object of result) {
      const data = await object.json()
      console.log(data)
     }

    console.log(data)
  } catch (error) {
    console.error(error);
  }
}

getPromiseResult()

//*Explanation -

// *success -
// *success k case m jab sare promise resolve honge to sare promise ka result hume ek sath ek Array m wrap hokar mil jayega and jis promise ka timer sabse jyada hoga utne hi time k bad sare promise ka result milega. aur jin promises ka time kam h vo sare wait krenge uss promise ke resolve hone ka jiska timer sabse jyada hai.

// *failure -
// *Sare promises me se agar ek bhi promise reject hota hai to bas usi promise ka result milega utni time limite k bad jitna usme time diya hai. other promises resolve ya reject hone pr bhi print nahi honge aur unka timer bhi matter nahi karta. so the conclusion is first rejected promise will be printed because it's priority is too high.

