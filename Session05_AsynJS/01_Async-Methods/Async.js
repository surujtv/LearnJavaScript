//Working wth the asynchronous js Code-


console.log('Code Start...')

function delay1(){
    console.log('Code Running Asynchronously... 3Sec')
}

function delay2(){
    console.log('Code Running Asynchronously... 6Sec')
}
function delay3(){
    console.log('Code Running Asynchronously... 9Sec')
}


setTimeout(delay1, 3000)    
setTimeout(delay2, 6000)
setTimeout(delay3, 9000)

for(let i = 1; i <=10; i++){
    console.log('Loop iterating')
}

console.log('Code End...')