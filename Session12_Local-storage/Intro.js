/* 
    Local Storage -
    localStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date. This means the data stored persists even after the user closes the browser or restarts the computer.

    setting values in local storage -
    localStorage.setItem("key", "value")

    get values from local storage -
    localStorage.getItem("key")
*/

// set variables to local storage --

// document.addEventListener('input', (e)=>{
//     // console.log(e.target.value)
//     if(e.target.name == "userName"){
//         // localStorage.userName = e.target.value  
//         localStorage.setItem("userName", e.target.value)
//     }else{
//         // localStorage.userPass = e.target.value
//         localStorage.setItem("userPass", e.target.value)
//     }
// })

// document.querySelector('#printValue').addEventListener('click', ()=>{
//     // document.getElementById('userName').innerText = localStorage.userName  
//     // document.getElementById('userPass').innerText = localStorage.userPass  

//     document.getElementById('userName').innerText = localStorage.getItem("userName")  
//     document.getElementById('userPass').innerText = localStorage.getItem("userPass")  
// })

// -----------------------

// we can save object to local storage -

let myData = JSON.parse(localStorage.getItem("myData")) || {}

document.addEventListener('input', (e)=>{
    if(e.target.name == "userName") myData.userName = e.target.value        
    else myData.userPass = e.target.value        
    localStorage.setItem("myData", JSON.stringify(myData))
})

document.querySelector('#printValue').addEventListener('click', ()=>{
    document.getElementById('userName').innerText = myData.userName
    document.getElementById('userPass').innerText = myData.userPass 
})

// clear all items in local storage -
document.getElementById('clearAll').addEventListener('click', (e)=>{
    localStorage.clear()
    location.reload()
})

// clear single item -
document.getElementById('clearOne').addEventListener('click', (e)=>{
    localStorage.removeItem(document.getElementById('clearItem').value)
    location.reload()
})