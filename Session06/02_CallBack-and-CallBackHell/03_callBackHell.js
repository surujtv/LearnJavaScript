/*
      * Register  /1sec
      * mail
      * otpVerification
      * login
      * getUserDetail
      * userDetailDisplay

  */

function register(callback) {
  setTimeout(() => {
    console.log("userRegistered ! ");
    let email = "surendrajatav@gmail.com";
    callback(email);
  }, 1000);
}

function mail(email, callback) {
  setTimeout(() => {
    console.log("mail sent ! " + email);
    let otp = 12345;
    callback(otp);
  }, 2000);
}

function otpVerification(otp, callback) {
  setTimeout(() => {
    console.log("otp verified ! " + otp);
    let loginDetails = "loggedIn";
    callback(loginDetails);
  }, 3000);
}

function login(loginDetail, callback) {
  setTimeout(() => {
    console.log("login successful ! " + loginDetail);
    let user = {
      name: "Surendra",
      age: 25,
    };
    callback(user);
  }, 3000);
}

function getUserDetail(user, callback) {
  setTimeout(() => {
    console.log("user Detail fetched ! ", user);
    callback();
  }, 4000);
}

function userDetailDisplay(callback) {
  setTimeout(() => {
    console.log("user details displayed ! ");
    callback();
  }, 1000);
}

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
