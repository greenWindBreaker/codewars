//solution156
//CONVERT A STRING TO AN ARRAY... write a function to split a string and convert it into an array of words. ex: "I love codewars" -> ['I','love','codewars']

function stringToArray(string){
    return string.split(' ');// this is best practices.
}

console.log(stringToArray('dont let your dreams be dreams'))//['dont','let','your','dreams','be','dreams']