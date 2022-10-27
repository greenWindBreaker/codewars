//standup009
//methods-> map, indexOf, lastIndexOf
//difficult challenge, high-frequency in interviews

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//'looking for duplicates' = indexOf
//'move through and return something new' = map
//'ingnore capitization' = toLowerCase

// Examples:
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function encodeDupes(str){
    //toLowercase
    //create something new-> map but first we will split it so we can use map. split will craete an array
    //split-> map-> indexOf === lastIndexOf ? '(' : ')' -> join
    return str.toLowerCase().split('').map((letter,i, arr)=> arr.indexOf(letter) === arr.lastIndexOf(letter) ? '(' : ')')//letter = value, i = index, arr = array
    //we are not using the i in map so do we need it?
    .join('')
}
//optimization issue-> we are running into Quaderaltic, so its Too Expensive
//we need hashmaps
//a two pass solution -> a 2n solution which reduces down to O(n)
//MUST HAVE THIS QUESTION MEMORIZED
//we will come back to it
console.log(encodeDupes('din'))//'((('
console.log(encodeDupes("recede"))//"()()()"
console.log(encodeDupes("Success"))//")())())"