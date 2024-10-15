/*
    Promise.any()
    *It is very much similar to Promise.race()
    *It will wait for only promise that is success first doesn't matter if any promise get rejected earlier it focus only on success. it is success seeking API.

    *but if all the promises were failed present in the array then it will return an aggregate error that means it will return an Error of array (List of errors).
    we can see these errors by writing console.log(err.errors) inside catch block.


    *What is AggregateError?
    *The AggregateError object represents an error when several errors need to be wrapped in a single error. It is thrown when multiple errors need to be reported by an operation, for example by Promise.
*/

  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
    //   resolve("Promise 1 is resolved within 6 sec");
      reject("Promise 1 is reject within 6 sec");
    }, 6000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
    //   resolve("Promise 2 is resolved within 2 sec");
      reject("Promise 2 is reject within 2 sec");
    }, 2000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
    //   resolve("Promise 3 is resolved within 5 sec");
      reject("Promise 3 is reject within 5 sec")
    }, 5000)
  });  
  
  
  async function getPromiseResult() {
    
    try {

      const result = await Promise.any([promise1, promise2, promise3]);
  
      console.log(result);
  
    } catch (error) {

      console.error(error);

    }

  }
  
  getPromiseResult()


// *Completed.