/*
    rest-parameter using rest operator
    takes all the rest arguments and returns an array of them.
*/

// add all the numbers passed to this function into a new array called "numbers"

function sum(...numbers){
    let total = 0;
    for(let i=0; i<numbers.length; i++){
        total += numbers[i];
    }
    return total;
}
const total = sum(2,5,9,18);
console.log(`The sum is ${total}`);

// using reduce method -

function sum1( ...args ) {
    const result = args.reduce((accumulator, currentValue) => accumulator + currentValue , 0 );
    return result;
}

console.log(`Sum is ${sum1(2,4,6,5)}`);
