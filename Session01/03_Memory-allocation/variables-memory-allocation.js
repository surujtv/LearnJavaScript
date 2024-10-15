let firstName = 'Sandhya'
let lastName = 'Dwivedi'
let duplicateName = 'Sandhya'
let concateName = 'San' + 'dhya'
let age = 25
let birthYear = 1999
let isGraduate = true
let isMarried = false
let nullType = null
let undefinedType = undefined
let emptyString = ''

/*
    phase 1 -(memory creation)
    variable declare karte hi memory create ho jati h and us variable m undefined store kr diya jata hai. 
    
    phase 2 - 
    fir jab hum varable ko kisi value se initialize karte hai tab vo value us variable ke pass jo memory address hota h us memory address par jakar store ho jati hai. 

    NOTE: kabhi kabhi kuchh alag alag variables ke pass values same hoti hai to unke liye system m memory ek hi jagah create hoti h and vahi ek address alag alag variable ko assign kar diya jata hai jisse jab hum variable ke through us value ko acces karte hai tab us memory address vo value hume mil jati hai.
    for Example - true ke liye sirf ek hi memory address hota hai kyunki ye value hamesha har variable ke pass same hi hoti hai. jaise var1 = true, var2 = true is case m dono variable ko ek hi memory address assign hoga. yahi same cheez false, null, undefined or empty strings k liye hota hai.
    
    NOTE: memory address ka jyada use Non-premitive data types me hota h kyunki vaha pr har time memory address ko compare kiya jata hai. yaha iska jyada use nahi hai kyunki yaha jab hum do variables ko compare karete h tab ye uski value ko compare karta hai. 

    NOTE: jab bhi hum kisi variable ki value ko update karte hai to us value ka address change ho jata hai.
*/