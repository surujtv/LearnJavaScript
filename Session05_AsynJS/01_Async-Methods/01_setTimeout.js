/*
    Definition - 
    setTimeout is a special type of higher order of function that provides delay for a particular tasks. it returns a unique id that can be used to cancel this task by using clearTimeout(id) or clearInterval(id).

    Return Value -
    The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout(). This value can be passed to clearTimeout() to cancel the timeout.

*/

console.log('Start...')


const timer1 = setTimeout(()=>{
    console.log('Hello...')
}, 0)

const timer2 = setTimeout(()=>{
    console.log('World...')
}, 2000)

const timer3 = setTimeout(()=>{
    console.log('kuchh...')
}, 5000)

const timer4 = setTimeout(()=>{
    console.log('Aur_hi...')
}, 2000)

// Jab bhi hum setTimeout function ka use karte hai ye ek id generate karta hai jo time humne iske argument m pass kiya hai uske liye. aur ye us id ko return bhi kr deta hai jisse hum ek variable m store karva lete h and uska use hum karte hai clearTimeout function m jo ki us setTimeout function ko execute nahi hone dega jiski timeID humne pass ki hai clearTimeout mai.  

// clearTimeout() - ye ek predefined function hota hai jo ki ek argument leta h jo ki hume milta hai jab hum setTimeout ko call krte hai. aur us argument k base pr ye function us setTimeout ko identify karke execute hone se rok deta hai.


// dono ek jaisa hi work karte hai pata nahi bnaye kyu the ek hi bana dete..

clearTimeout(timer3); // kuchh... will not be printed
clearInterval(timer2); // World... will not be printed

console.log(timer1)
console.log(timer2)
console.log(timer3)
console.log(timer4)

console.log('End...')
