/*
    Definition - 

    The Promise.allSettled() static method takes an Array of promises as input and returns a single Promise. It will wait for all the promises will get settled (No matter Promises are successful or get rejected) then it will return the values and errors of the all promises in wrapped inside a objects and put them into the array.
    if any promise get rejected it will return a Error immediately of that particular Promise No matter other promises are settled or not. it will not move ahead.

    *NOTE:
    *It is working same as Promise.all() but error handling is different.
    *It will wait until all promises will get settled no matter it's fulfilled or get rejected. 
    *It returns array of objects where object contains status of the promises and value or reason  of the promises.

    Example - [{
        status: 'fulfilled',
        value: 'Hello World!'
    }, {
        status: 'rejected',
        reason: Error('Oops!')
    }]

    SYNTAX - 
    const result = Promise.allSettled([promise1, promise2, promise3])
  
*/

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
    //   resolve("Promise 1 is resolved within 8 sec");
      reject("Promise 1 is reject within 6 sec");
    }, 6000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
    //   resolve("Promise 2 is resolved within 1 sec");
      reject("Promise 2 is reject within 1 sec");
    }, 1000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
    //   resolve("Promise 3 is resolved within 5 sec");
      reject("Promise 3 is reject within 5 sec")
    }, 5000)
  });

  
  
  async function getPromiseResult() {
    try {
      const result = await Promise.allSettled([promise1, promise2, promise3]);
  
      console.log(result);
  
    } catch (error) {
      console.error(error);
    }
  }
  
  getPromiseResult()

// *Explanation - 
// *Promise.allSettled will wait for all the promises to be settled no matter they resolved aur anyone get rejected it will return a array of objects. each object have two keys 1st one is status that depends on promise get resolve aur reject and 2nd one is value or reason of the promise. and result will received after the highest time that is given to the promise.
