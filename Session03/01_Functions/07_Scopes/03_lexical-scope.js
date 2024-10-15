/*
  Scope - 
  A scope is a named area of visibility for variables. In JavaScript, there are two types of scopes: local and global.

  lexical-scope - 
  if  we try to access a variable that is not declared in current scope, it will search for that variable from parent/outer scopes until it reaches to that variable that is called lexical scope.

*/
const myName = "Global Scope";

function myFun() {
  // const myName = 'Surendra Jatav'

  const newFun = () => {
    // const myName = "I am in the nested function"
    console.log(myName); // I am in the nested function

    const newFun1 = function () {
      // const myName =  'new function'
      console.log(myName);
    };
    newFun1();
  };
  
  console.log(myName);
  newFun();
}

myFun();

/*
    Description - 
    if  we try to access a variable that is not declared in current scope, it will search for that variable from parent/outer scopes until it reaches to that variable that is called lexical scope.

*/
