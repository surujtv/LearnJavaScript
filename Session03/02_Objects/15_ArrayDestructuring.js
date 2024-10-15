const array = ['Surendra', 'BCA', 23]
const [name, qualification, age] = array // ye sahi h

// const [name, age, qualification] = array /* #aisa nahi karna h hume */ 

/*
    NOTE: ye bhi same object jaise hi destructure hota h bs isme object vale breacjets ki jagah array vale breakcet aa jate h but sequence must h isme jaise array m pehle name fir graduation fir age h to destructure krte time vahi sequence hona chahiye otherwise diffrent variables m alag data store ho jayega. jaise line number 4 m age variable m BCA store ho jayega and qualification m 23 store ho jayega.
*/


// now we can use these variables -
console.log(name, qualification, age)