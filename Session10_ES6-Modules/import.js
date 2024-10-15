/*

    To enable modules we have to set attribute type and it's value module in index.html while connecting this file.

    *Jab bhi hum script ka type module set kar dete hai iss file ke sare variables and functions Module scope m avaiable honge na ki gobal scope m.

    *jab bhi script ka type module set kar dete hai defer keyword activate ho jata hai.

    *strict mode bhi enable ho jata hai by default

    *check all requests in network.

    *imported script file ka code pehle execute hota h.
*/

import { usersData, name } from "./export.js";
import productsData from "./exportDefault.js";
// import {usersData, name as myName} from './export'
import * as something from './exportMultiple.js'

// we can change variable names at the time of import and export

// if name already present in the file the change the variable name while importing
// let name = 'Sandhya'

const h1 = document.querySelector('h1')
console.log(h1) // check by insert or remove type module in html

user = {
    name: 'Sandhya',
    age: 26,
}   // check the error in console


console.log(usersData);
console.log(name);
// console.log(myName)
console.log(productsData)

console.log(something)


