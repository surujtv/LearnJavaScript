let variable1 = 'surendra'
let variable2 = variable1   // ek hi memory-address ko point karte hai 
variable2 = 'Sandhya'  // new value assign karne ke sath hi new memory-address ban jayega

console.log(`Variable1 - ${variable1}`)    // surendra
console.log(`Variable2 - ${variable2}`)     // Sandhya 

// NOTE: jis variable ki value ko change krenge usi ki value change hogi. But object and array k sath aisa nahi hota.


// lets see other Example with Object and Arrays -
//suppose hume ek new array banana hai kuchh aur fruits add krne ke sath but hum chahte hai ki humari purani array m change na ho -
let arr1 = ['Apple', 'Banana'] 
let arr2 = arr1 // same memory-address ko point krenge. basically we are copying the reference of that array to another variable

arr2.push('Orange') // new array m ek new fruit add krte hai
arr2.push('Grapes')

console.log('Purani Array - ', arr1)
console.log('Nayi Array - ', arr2)  
// Problem - yaha par arr1 ke sath sath arr2 bhi update ho rahi h jabki humne push() method bs arr2 par hi apply kiya hai. So that's not right way to copy any array or object.

//============================================================

//suppose hume ek new Object banana hai and us new Object ki property ko modify karna hai but purane Object ki property m changes nahi hona chahiye-

let obj1 = {firstName: 'Sandhya', lastName: 'Dwivedi'} 
let obj2 = obj1 // same memory-address ko point krenge. basically we are copying the reference of that object to another variable.

obj2.firstName = 'Sandhu' //obj2 ki property ko modify karna hai

console.log('Purana Object - ', obj1)
console.log('Naya Object - ', obj2) 

// Problem - yaha par obj1 ke sath sath obj2 ki property bhi modify ho rahi hai jabki hum sirf obj2 ki property update kar rhe hai.