// function return promise -

const URL = "https://jsonplaceholder.typicode.com/users";

function myFetchApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const xhr = new XMLHttpRequest();

      xhr.onload = function () {
        if (this.status === 200) {
          // console.log(xhr.response)
          resolve(xhr.response);
        } else {
          // console.log('Data Not Found')
          reject("Data Not Found");
        }
      };

      xhr.open("GET", URL, true);
      xhr.send();
    }, 5000);
  });
}

myFetchApi()
  .then((response) => {
    // console.log(response)
    return JSON.parse(response);
  })
  .then((jsonData) => {
    console.log(jsonData);
  })
  .catch((err) => {
    console.log(err);
  });
