//solution147
//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//ex: "Dermatoglyphics" --> true, "aba" --> false, "moOse" --> false (ignore letter case)

function isIsogram(str){
    strLowCase = str.toLowerCase()
    for(let i = 0; i <strLowCase.length; i++){
        for(let j = i +1; j < strLowCase.length; j++){
            if(strLowCase[i] === strLowCase[j]){
                return false
            }
        }

    }
    return true
}

console.log(isIsogram('truck'))//true
console.log(isIsogram('coOler'))//false
console.log(isIsogram('cooler'))//false