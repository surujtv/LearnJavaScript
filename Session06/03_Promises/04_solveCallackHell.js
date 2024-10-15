/*
      * Register  /1sec
      * mail
      * otpVerification
      * login
      * getUserDetail
      * userDetailDisplay

  */

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("userRegistered ! ");
      let email = "surendrajatav@gmail.com";
      resolve(email);
    }, 1000);
  });
}

function mail(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("mail sent ! " + email);
      let otp = 12345;
      resolve(otp);
    }, 2000);
  });
}

function otpVerification(otp) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("otp verified ! " + otp);
      let loginDetails = "loggedIn";
      resolve(loginDetails);
    }, 3000);
  });
}

function login(loginDetail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login successful ! " + loginDetail);
      let user = {
        name: "Surendra",
        age: 25,
      };
      // resolve(user)
      reject("Tu kon hai bhai...");
    }, 3000);
  });
}

function getUserDetail(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("user Detail fetched ! ", user);
      resolve();
    }, 4000);
  });
}

function userDetailDisplay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("user details displayed ! ");
      resolve("Process completed");
    }, 1000);
  });
}

/*
    register((email) => {
        mail(email, (otp) => {
            otpVerification(otp, (loginDetails) => {
                login(loginDetails, (user) => {
                    getUserDetail(user, () => {
                        userDetailDisplay(() => {
                            console.log("Process completed");
                        });
                    });
                });
            });
        });
    });
*/

//promise -
// register()
//     .then((email)=>{return mail(email)})
//     .then((otp)=>{return otpVerification(otp)})
//     .then((loginDetails)=>{return login(loginDetails)})
//     .then((user)=>{return getUserDetail(user)})
//     .then(()=>{return userDetailDisplay()})
//     .then((data)=>{console.log(data)})
//     .catch((err)=>{
//         console.error('Error Occured ! ' + err)
// })

const returnedValue = register() //*Promise chaining
  .then((email) => mail(email))

  .then((otp) => otpVerification(otp))

  .then((loginDetails) => login(loginDetails))

  .then((user) => getUserDetail(user))

  .then(() => userDetailDisplay())

  .then((data) => console.log(data))

  .catch((err) => console.error("Error Occured ! " + err));

console.log(returnedValue);
