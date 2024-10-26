
// for loop with var -

for(var i = 1; i<=3; i++){
    // console.log(i);
    setTimeout(()=>{
        console.log(i);
    }, 1000)
}

// output -- 4 4 4  (after one second)
// this happening because variable i stored in global scopes and every time when loop iterates it point that global value of i. 


// -------------------------------


// for loop with let -

for(let i = 1; i<=3; i++){
    // console.log(i);
    setTimeout(()=>{
        console.log(i);
    }, 1000)
}

// output -- 1 2 3  (after one second)
// this happening because variable i stored in individual block scopes and every time when loop iterates it creates a new block scope and assign previous value to i within this newly created block.


// -------------------------------


for(let i = 1, getI = () => i; i<=3; i++){
    console.log(getI())
}

// output -- 1 1 1
// this is happening because initialize statement execute only once so getI registered inside memory only once.

// -------------------------------
