//solution061
//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
const removeExclamationMarks = s => s.split('').filter((letter)=> letter !== '!').join('')
// also -> return s.split('!').join('')

console.log(removeExclamationMarks('ks!hdf!fds dfgsfgs!'))