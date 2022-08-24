//solution134
//You need to write a function that reverses the words in a given string. A word can also fit an empty string. 
//As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

const reverse = string => string.split(' ').reverse().join(' ')

console.log(reverse('Nobody move! I dropped me brain.'))//brain. me dropped I move! Nobody