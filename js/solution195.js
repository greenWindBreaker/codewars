//solution195
//A NEEDLE IN HAYSTACK...   Write a function findNeedle() that takes an array full of junk but containing one "needle". After your function finds the needle it should return a message (as a string) that says: "found the needle at position " plus the index it found the needle in. 

// function findNeedle(haystack){
//     return 'found the needle at position '+ haystack.indexOf("needle");
// }

const findNeedle = haystack => 'found the needle at position '+ haystack.indexOf("needle");
console.log(findNeedle('trwehb sdfgb ioyuto cvnae needle iuebrqb sdjbi'));