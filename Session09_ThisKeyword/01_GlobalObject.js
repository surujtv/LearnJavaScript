/*
  this keyword refers to it's current object. 
  *NOTE: this keyword behaves different in different scenario's  
*/

// when we target it in global scope this refers to global object whether it is Nodejs environment or browser.

console.log(this)     // output - window object in browser 

//node js doesn't have it's window object so we will see an empty object in terminal but in browser console we can see window object.