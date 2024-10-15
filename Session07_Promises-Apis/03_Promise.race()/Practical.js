/*
    *NOTE:
    *It's a kind of like a race this method returns a result of first settled promise no matter it's an Error or fulfilled value.

    SYNTAX - 
    const result = Promise.race([promise1, promise2, promise3])

*/

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
    //   resolve("Promise 1 is resolved within 8 sec");
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
      resolve("Promise 3 is resolved within 5 sec");
    //   reject("Promise 3 is reject within 5 sec")
    }, 5000)
  });

  
  
  async function getPromiseResult() {
    try {
      const result = await Promise.race([promise1, promise2, promise3]);
  
      console.log(result);
  
    } catch (error) {
      console.error(error);
    }
  }
  
  getPromiseResult()

  //*Explanation - 

  //* Preference usi ko milegi jiska timer sabse kam hai No matter it's fulfilled or get rejected. it will neglect other Promises. 