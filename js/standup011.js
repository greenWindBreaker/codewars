//standup011
//standup for 11/02/2022 got post-powned to 11/03 

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// last('take me to semynak'), ['take', 'me', 'semynak', 'to']

function sortLastChar(x){
    //split & sort method, sort is lexagraphical sort by defualt
    //could use slice or localeCompare
    //sort ->
    return x.split(' ').sort((a,b)=> a.charCodeAt(a.length - 1) -b.charCodeAt(b.length - 1))//charCodeat starts counint at 0 so we do - 1. to grab the last letter, 
    //return x.split(' ').sort((a,b)=> a.slice(-1) > b.slice(-1)) // slice method.. WIP 
}

console.log(sortLastChar('man i need a taxi up to ubud'))//['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
console.log(sortLastChar('what time are we climbing up the volcano'))//['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']