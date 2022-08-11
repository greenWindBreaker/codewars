//solution117
//Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.
//"Yes" --> "Yes?"
//"No?" --> "No?"

const ensureQuestion = s => s.split('').reverse()[0]==='?' ? s : s+'?'

console.log(ensureQuestion('sporkle'))//sporkle?