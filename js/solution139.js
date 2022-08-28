//solution139
//Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

function switcher(x){
    let abc = ' zyxwvutsrqponmlkjihgfedcba!? '
    //return String(x).split('').reverse().join('')  -> will reverse 'abcdefghijklmnopqrstuvwxyz' so we dont have to type the abcs backwards. now we can plug "zyxwvutsrqponmlkjihgfedcba" into our abc variable!
    return x.map(item => abc[item]).join('')
    //possible to solve this  with a for loop as well?
}

console.log(switcher([28,26]))// ?a
console.log(switcher([8,12,15,5,22,23]))// solved

//console.log(switcher('abcdefghijklmnopqrstuvwxyz'))// zyxwvutsrqponmlkjihgfedcba   while return String(x).split('').reverse().join('') is the only one active.