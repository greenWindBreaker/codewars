//solution067
//Write a function that checks if a given string (case insensitive) is a palindrome

const isPalindrome = x => x.toLowerCase() === x.split('').reverse().join('').toLowerCase() 
//for case such as, 'abBa'... 'abBa' !== 'aBba' so toLowerCase solves this issue

console.log(isPalindrome('racecar'))//true
