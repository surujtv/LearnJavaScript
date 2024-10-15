console.log('Start...')

document.write('Hello World')
alert('Click Ok')   // blocking main thread..
confirm('Click here to confirm..')

function msg(){
    console.log('Hii')
}

msg()

console.log('End...')