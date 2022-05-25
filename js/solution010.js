//capitalization and mutability
//make the first character in the string "word" upper case
//for a single word
//Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

const capitalizeWord = word => word[0].toUpperCase()+word.slice(1);
console.log(capitalizeWord('marceline'))//Marceline

