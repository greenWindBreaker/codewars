//solution086
//Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

const isPalindrome = line => String(line).split('').join('') === String(line).split('').reverse().join('')

console.log(isPalindrome(123431))//false



