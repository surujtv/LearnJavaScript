/*
    
    http://localhost:4056/create
    http://localhost:4056/get
    http://localhost:4056/get-one/id
    http://localhost:4056/update/id
    http://localhost:4056/delete/id

*/


function myFetch(url, config) {

    const method = config?.method  || 'GET';

    const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    
    xhr.onload = function () {
        // console.log(this)
        if (this.status >= 200 && this.status < 300) {
            resolve(JSON.parse(this.response));
        }else{
            reject(JSON.parse(this.response))
        }
    };

    xhr.open(method, url, true);

    method != 'GET' ? xhr.setRequestHeader(Object.keys(config.headers)[0], Object.values(config.headers)[0]) : null;

    xhr.send(config?.body || null)

  });
  return promise
}

async function getData() {

//  const url = "http://localhost:4056/get";
//  const url = "http://localhost:4056/create";
//  const url = "http://localhost:4056/update/6648b5b12eb633bd0210fee9";

  const config = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: {
        "name": "Sandhya",
        "email": "phoolkumari@gmail.com",
        "mobile": '9993945380',
        "gender": "Female",
        "address": "IndoreBhai",
    }
  }

  const response = await myFetch(url, config);
//   const response = await myFetch(url);
    console.log(response)
    alert(response.message)
}

// getData();
