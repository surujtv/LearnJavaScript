/*
    setInterval - 
    The setInterval() function is commonly used to set a delay for functions that are executed again and again, such as animations. You can cancel the interval using clearInterval() . If you wish to have your function called once after the specified delay, use setTimeout().

*/

console.log('Start...')

const timerID = setInterval(()=>{   //default behavior - self repetition
    const date = Date.now()
    console.log(date)
}, 10000)   //10 sec m har bar khud ko repeat karta rhega

setTimeout(()=>{
    clearInterval(timerID) // iski sahayata se hum setInterwal ka execution rok sakte hai.
    // clearTimeout(timerID)
}, 50000)   //50 sec bad ye execute ho jayega..

console.log('End...')
