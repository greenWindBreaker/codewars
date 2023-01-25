//solution203
//Given a string, return a new string that has transformed based on the input:
// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.
// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

function strMagic(str){
    let strReversed = str.split(' ').reverse().join(' ');
    return strReversed.split('').map(e=>e==e.toLowerCase()?e.toUpperCase():e.toLowerCase()).join('');
}

console.log(strMagic('Example Input'))//iNPUT eXAMPLE