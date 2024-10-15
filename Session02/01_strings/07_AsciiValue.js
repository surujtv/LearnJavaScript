// Find asscii Value--->

// Method--> var_name.char.charCodeAt(Index_value)

let char = 'a'
console.log(char.charCodeAt()); // output--> 97

//NOTE: bydefault the Method takes 0 index

//--------------------------------------------------------------

// for example if we store multiple characters in a string thi method will return only first character ASCII value-->
let char1 = 'Sandhya'
console.log(char1.charCodeAt()); // it will return 83 which is ASCII value of 'S'

//--------------------------------------------------------------
// we can manually inter index-->
let char2 = 'Sandhya'
console.log(char1.charCodeAt(2)); // it will return 110 which is ASCII value of 'n'

//NOTE: we can,t enter multiple index values it takes only single argument.

