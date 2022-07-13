//solution075
//Write a function get_char() / getChar() which takes a number and returns the corresponding utf-16 char for that value.

const getChar = c => String.fromCharCode(c)// String.fromCharCode() will return a string created from the specified sequence of UTF-16 code units.

console.log(getChar(80))//'P'