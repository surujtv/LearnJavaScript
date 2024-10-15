/*
    Async/await is a feature in JavaScript that allows you to work with asynchronous code in a more synchronous-like manner, making it easier to write and understand asynchronous code. Async Functions always return a promise. Await Keyword is used only in Async Functions to wait for promise.

    --------

    What is async?
    The Async function simply allows us to write promises-based code as if it were synchronous and it checks that we are not breaking the execution thread.
    Async functions will always return a value. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.
    
    --------

    What is await?
    Await is used to wait for the promise result. It could be used within the async block only. It makes the code wait until the promise returns a result.

    ---------

    How async await works behind the scene?
    Error handling?
    Interviews
    async await vs .then & .catch
*/

// lets create a simple async function -

const promise = new Promise((resolve, reject) => {
  resolve("Promise Resolved");
});

const getData = async () => {
  // return "Hello Sandhya";
  // we don't return a promise here we are just returning a string

  return promise;
};

const data = getData();

console.log(data); // output - Promise with resolved

//Handle Data using then()

data
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });

// status: pending -> fulfilled


/*
    So, in this case JavaScript engine will put our code into microtask queue and continue executing other codes. 
*/
